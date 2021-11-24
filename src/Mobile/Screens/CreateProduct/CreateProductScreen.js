import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, PRODUCT_TITLE_MAX_LENGTH, PRODUCT_PRICE_MAX_LENGTH, PRODUCT_DESC_MAX_LENGTH, PRODUCT_SPEC_VALUE_MAX_LENGTH, PRODUCT_NUMERIC_SPEC_VALUE_MAX_LENGTH, MAX_IMAGE_UPLOAD } from '../../Constants'
import Color from '../../Constants/Color'
import useAppContext from '../../hooks/useAppContext'
import { useRef, useEffect, useState } from 'react'
import { TextField, InputAdornment, MenuItem, ListItemText, Checkbox, Switch, ButtonBase } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { createFilterOptions } from '@material-ui/lab/Autocomplete'
import Validator from '../../../helpers/validator'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'
import CreateProduct from '../../../mutations/CreateProduct'
import BackButton from '../../Components/BackButton'
import Button from '../../Components/Button'
import NumberFormat from 'react-number-format'
import { Swiper, SwiperSlide } from 'swiper/react'
import AdministrativeAreaLoader from '../../../helpers/AdministrativeAreasLoader'

const megabytes = 1048576
const autocompleteFilter = createFilterOptions()

const Component = props => {
  const { category, me, productConditions, rentalDurations } = props
  const { history, environment, pathname } = useAppContext()
  const [loading, setLoading] = useState(false)
  const [carouselPos, setCarouselPos] = useState(0)
  const [files, setFiles] = useState([])
  const maxImageUpload = category.maxImageUpload || MAX_IMAGE_UPLOAD
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    accept: 'image/jpeg',
    disabled: loading,
    noClick: true,
    noKeyboard: true,
    maxSize: 6 * megabytes,
    onDrop: async (acceptedFiles) => {
      if(acceptedFiles.length > 0) {
        const images = await Promise.all(acceptedFiles.slice(0, maxImageUpload).map(file => {
          return new Promise(async (resolve) => {
            const tool = await fromImage(file)
            const image = await tool.quality(0.4).toFile(file.name)
            image.preview = URL.createObjectURL(image)
            resolve(image)
          })
        }))
        setCarouselPos(0)
        setFiles(images)
      }
    },
    onDropRejected: () => console.log('Rejected')
  })

  const citiesFirstLoaded = useRef(true)
  const districtsFirstLoaded = useRef(true)
  const citiesLoader = useRef(new AdministrativeAreaLoader(environment))
  const districtsLoader = useRef(new AdministrativeAreaLoader(environment))
  const { provinces } = props
  const [province, setProvince] = useState(me?.store?.address?.province)
  const [cities, setCities] = useState([])
  const [city, setCity] = useState(me?.store?.address?.city)
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState(me?.store?.address?.district)
  const [loadingCities, setLoadingCities] = useState(false)
  const [loadingDistricts, setLoadingDistricts] = useState(false)

  const _isMounted = useRef(true)
  const scrollRef = useRef()
  const headerRef = useRef()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [productConditionId, setProductConditionId] = useState(null)
  const [rentalDurationId, setRentalDurationId] = useState(null)
  const [syncLocation, setSyncLocation] = useState(category.forceLocationInput !== true)
  const [specs, setSpecs] = useState(category.specFields.reduce((obj, currentVal) => {
    obj[currentVal.attribute.id] = currentVal.isMulti ? [] : ''
    return obj
  }, {}))
  const [specFields] = useState(category.specFields.reduce((obj, currentVal) => {
    obj[currentVal.attribute.id] = {
      prefix: currentVal.prefix,
      suffix: currentVal.suffix
    }
    return obj
  }, {}))

  const [validation, setValidation] = useState({ isValid: false })
  const [pivotFieldOptionId, setPivotFieldOptionId] = useState(null)

  const handleSwipe = (obj) => {
    setCarouselPos(obj.activeIndex)
  }

  const _setSpecs = field => e => {
    let value = ''
    if(['int', 'float'].indexOf(field.type) > -1)
      value = e.value
    else {
      if(field.isMulti) {
        value = e.target.value
        value.sort()
      } else {
        value = (e.target.value || '').trimLeft()
      }
    }

    setSpecs(prev => ({ ...prev, [field.attribute.id]: value }))
  }

  const _setPrice = (values) => {
    const { value } = values
    setPrice(value)
  }

  const isValid = () => {
    const specsRules = category.specFields.reduce((rules, currentVal) => {
      if(
        !category.pivotField ||
        (category.pivotField && !currentVal.excludePivotFieldOptionIds?.includes(pivotFieldOptionId) && (!currentVal.includePivotFieldOptionIds || currentVal.includePivotFieldOptionIds?.length === 0)) ||
        (category.pivotField && !currentVal.excludePivotFieldOptionIds?.includes(pivotFieldOptionId) && currentVal.includePivotFieldOptionIds?.length > 0 && currentVal.includePivotFieldOptionIds?.includes(pivotFieldOptionId))
      ) {
        if(currentVal.isRequired) {
          rules.push({
            field: currentVal.attribute.id,
            method: Validator.isEmpty,
            validWhen: false,
            message: currentVal.emptyErrorMessage?.trim()?.length > 0 ? currentVal.emptyErrorMessage : `${currentVal.attribute.name} harus diisi.`
          })
        }

        if(['int', 'float'].indexOf(currentVal.type) > -1 && typeof currentVal.max === 'number') {
          rules.push({
            field: currentVal.attribute.id,
            method: val => {
              if(val.length === 0) {
                return true
              }

              const value = parseFloat(val, 10)
              return value <= currentVal.max
            },
            validWhen: true,
            message: `${currentVal.attribute.name} maksimal ${currentVal.max}.`
          })
        }

        if(['int', 'float'].indexOf(currentVal.type) > -1 && typeof currentVal.min === 'number') {
          rules.push({
            field: currentVal.attribute.id,
            method: val => {
              if(val.length === 0) {
                return true
              }

              const value = parseFloat(val, 10)
              return value >= currentVal.min
            },
            validWhen: true,
            message: `${currentVal.attribute.name} minimal ${currentVal.min}.`
          })
        }
      }
      return rules
    }, [])

    if(category.pivotField) {
      const { pivotField } = category
      specsRules.push({
        field: 'pivotFieldOptionId',
        method: Validator.isEmpty,
        validWhen: false,
        message: pivotField.emptyErrorMessage?.trim()?.length > 0 ? pivotField.emptyErrorMessage : `${pivotField.attribute.name} harus diisi.`
      })
    }

    const validator = new Validator([
      ...specsRules,
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Isi judul iklan Anda.'
      },
      {
        field: 'price',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Isi harga yang Anda tawarkan.'
      },
      {
        field: 'price',
        method: (price) => parseFloat(price, 10) > 0,
        validWhen: true,
        message: 'Harga harus lebih dari Rp 0.'
      },
      {
        field: 'desc',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'Isi deskripsi iklan Anda secara mendetail dan lengkap.'
      },
      ...(category.requiresProductCondition ? [
        {
          field: 'productConditionId',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'Isi kondisi produk yang Anda tawarkan.'
        },
      ] : []),
      ...(category.listingType === 'rental_product' ? [
        {
          field: 'rentalDurationId',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'Isi durasi sewa produk yang Anda tawarkan.'
        },
      ] : []),
      ...(!syncLocation ? [
        {
          field: 'province',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'Provinsi harus diisi.'
        },
      ] : []),
      ...(!syncLocation ? [
        {
          field: 'city',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'Kota/Kabupaten harus diisi.'
        },
      ] : []),
      ...(!syncLocation ? [
        {
          field: 'district',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'Kecamatan harus diisi.'
        },
      ] : [])
    ])

    const validation = validator.validate({
      ...specs,
      name,
      price,
      desc,
      ...(category.requiresProductCondition ? { productConditionId } : {}),
      ...(category.listingType === 'rental_product' ? { rentalDurationId } : {}),
      ...(!syncLocation ? { province } : {}),
      ...(!syncLocation ? { city } : {}),
      ...(!syncLocation ? { district } : {}),
      ...(category.pivotField ? { pivotFieldOptionId } : {})
    })
    
    setValidation(validation)
    if(files.length === 0) {
      alert('Tambahkan foto.')
      return false
    }
    return validation.isValid
  }

  const resetFormState = () => {
    setFiles([])
    setName('')
    setPrice('')
    setDesc('')
    setProductConditionId(null)
    setRentalDurationId(null)
    setSpecs(prev => {
      const newSpecs = {}
      for(let key in prev) {
        if(typeof prev[key] === 'object') 
          newSpecs[key] = []
        else
          newSpecs[key] = ''
      }
      return newSpecs
    })
  }

  const create = () => {
    if(isValid() && !loading) {
      const productSpecs = []
      for(let key in specs) {
        productSpecs.push({
          attributeId: key,
          value: Array.isArray(specs[key]) ? JSON.stringify(specs[key]) : specs[key],
          isMulti: Array.isArray(specs[key]),
          prefix: specFields[key].prefix,
          suffix: specFields[key].suffix
        })
      }

      const variables = {
        type: 'for_sale',
        storeId: me.store.id,
        categoryId: pathname.split('/').pop(),
        input: {
          name,
          price: parseFloat(price, 10),
          desc,
          isPublished: true,
          productConditionId,
          rentalDurationId,
          syncLocationWithStoreAddress: syncLocation,
          specs: productSpecs,
          location: syncLocation ? null : {
            provinceId: province.administrativeAreaId,
            cityId: city.administrativeAreaId,
            districtId: district.administrativeAreaId
          }
        }
      }

      setLoading(true)
      CreateProduct(environment, variables, files, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            resetFormState()
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  useEffect(() => {
    if(scrollRef.current) {
      scrollRef.current.onscroll = () => {
        const pageYOffset = scrollRef.current?.scrollTop
        if(headerRef.current) {
          if(pageYOffset > window.innerWidth) {
            headerRef.current.style.display = 'flex'
          } else {
            headerRef.current.style.display = 'none'
          }
        }
      }
    }

    return () => _isMounted.current = false
  }, [])

  useEffect(() => {
    if(province) {
      if(!citiesFirstLoaded.current) {
        setCity(null)
        setDistrict(null)
      } else {
        citiesFirstLoaded.current = false
      }
      setLoadingCities(true)
      setCities([])
      citiesLoader.current.load(province.administrativeAreaId, data => {
        setCities(data)
        setLoadingCities(false)
      })
    } else {
      setCity(null)
      setDistrict(null)
    }
  }, [province])

  useEffect(() => {
    if(city) {
      if(!districtsFirstLoaded.current) {
        setDistrict(null)
      } else {
        districtsFirstLoaded.current = false
      }
      setLoadingDistricts(true)
      setDistricts([])
      districtsLoader.current.load(city.administrativeAreaId, data => {
        setDistricts(data)
        setLoadingDistricts(false)
      })
    } else {
      setDistrict(null)
    }
  }, [city])

  useEffect(() => {
    if(!me) {
      history.replace('/')
    }
  }, [me, history])

  if(!me) return null
  
  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundImage: files.length > 0 ? 'linear-gradient(rgb(76, 76, 76), transparent)' : undefined,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 2
      }}>
        <BackButton color="white"/>
      </div>

      <div 
      ref={headerRef} 
      style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 3,
        display: 'none',
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center'
          }}>Iklan Baru</h1>
        </div>
        
      </div>

      <div 
      ref={scrollRef}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'auto'
      }}>
        <div style={{
          position: 'relative',
          width: '100vw',
          backgroundColor: 'rgb(207, 217, 222)',
          height: '100vw',
        }}>
          {files.length !== 1 ?
          <>
            <Swiper 
              onSlideChange={handleSwipe}
              virtual={false}
              style={{ zIndex: 0 }}
            >
              {files.map((item, i) => {
                return (
                  <SwiperSlide
                    key={i}
                  >
                    <div style={{
                      position: 'relative',
                      width: '100vw',
                      paddingBottom: '100%'
                    }}>
                      <img
                        src={item.preview}
                        alt={`product_preview_${i}`}
                        style={{
                          position: 'absolute',
                          height: '100%',
                          width: '100%',
                          left: 0,
                          bottom: 0,
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {/* {files.length > 1 &&
            <div style={{
              position: 'absolute',
              width: '100%',
              bottom: 15,
              height: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'white',
            }} pointerEvents="none">
              {files.map((item, i) => {
                return (
                  <div key={i} style={{
                    height: 5,
                    width: 5,
                    borderRadius: '50%',
                    backgroundColor: i === carouselPos ? Color.primary : 'white',
                    marginLeft: 2,
                    marginRight: 2
                  }}/>
                )
              })}
            </div>
            } */}

              {files.length > 1 &&
              <div style={{
                position: 'absolute',
                right: 10,
                bottom: 10,
                borderRadius: 7,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '5px 10px'
              }}>
                <span style={{
                  color: 'white',
                  fontSize: 'small'
                }}>
                  {carouselPos + 1}/{files.length}
                </span>
              </div>
              }
          </>
          :
          <img
            src={files[0].preview}
            alt={`product_preview_0`}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              bottom: 0,
              objectFit: 'cover'
            }}
          />
          }
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <Button
              label={files.length > 0 ? "Edit foto" : "Tambah foto"}
              style={{
                backgroundColor: 'white',
                color: 'black',
                margin: 15,
                position: 'absolute',
                left: 0,
                bottom: 0,
              }}
              onClick={open}
              disabled={loading}
            />
          </div>
        </div>

        <div style={{
          padding: '10px 15px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '10px 0'
          }}>
          {[...category.ancestors, category].map((item, i) => {
            return (
              <div key={item.id} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                {i > 0 &&
                <h3 style={{ margin: '0 10px'}}>{'>'}</h3>
                }
                <h3 style={{ margin: 0 }}>{item.name}</h3>
              </div>
            )
          })}
          </div>

          <TextField
            variant="outlined"
            label="Judul"
            fullWidth
            disabled={loading}
            value={name}
            onChange={e => setName(e.target.value.trimLeft())}
            inputProps={{
              maxLength: PRODUCT_TITLE_MAX_LENGTH
            }}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            error={validation?.name?.isInvalid}
            helperText={validation?.name?.message}
          />

          <NumberFormat
            customInput={TextField}
            variant="outlined"
            label="Harga"
            fullWidth
            disabled={loading}
            value={price}
            onValueChange={_setPrice}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start">Rp</InputAdornment>
            }}
            inputProps={{
              pattern: "[0-9]*",
              type: "text",
              inputMode: "numeric",
              maxLength: PRODUCT_PRICE_MAX_LENGTH
            }}
            error={validation?.price?.isInvalid}
            helperText={validation?.price?.message}
            allowNegative={false}
            decimalSeparator={null}
            thousandSeparator="."
          />

          {category.listingType === 'rental_product' &&
          <TextField
            variant="outlined"
            select
            label="Per durasi sewa"
            fullWidth
            disabled={loading}
            value={rentalDurationId || ''}
            onChange={(e) => setRentalDurationId(e.target.value)}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            error={validation.rentalDurationId?.isInvalid}
            helperText={validation.rentalDurationId?.message}
            SelectProps={{
              MenuProps: {
                style: {
                  maxHeight: 500
                }
              }
            }}
          >
            {(category.rentalDurationIds?.length > 0 ? rentalDurations.filter(item => category.rentalDurationIds.includes(item.id)) : rentalDurations).map((option, i) => (
              <MenuItem key={i} value={option.id}>
                {option.value} {option.name}
              </MenuItem>
            ))}
          </TextField>
          }

          <TextField
            variant="outlined"
            label="Deskripsi"
            disabled={loading}
            value={desc}
            onChange={e => setDesc(e.target.value.trimLeft())}
            multiline
            rows="8"
            fullWidth
            inputProps={{
              maxLength: PRODUCT_DESC_MAX_LENGTH
            }}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            error={validation?.desc?.isInvalid}
            helperText={validation?.desc?.message}
          />

          {(category.showsProductConditionField || 
            category.specFields.length > 0) &&
          <h3 style={{ margin: '10px 0'}}>Detail</h3>
          }

          {category.showsProductConditionField &&
          <TextField
            variant="outlined"
            select
            label="Kondisi"
            fullWidth
            disabled={loading}
            value={productConditionId || ''}
            onChange={(e) => setProductConditionId(e.target.value)}
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            error={validation.productConditionId?.isInvalid}
            helperText={validation.productConditionId?.message}
            SelectProps={{
              MenuProps: {
                style: {
                  maxHeight: 500
                }
              }
            }}
          >
            {productConditions.map((option, i) => (
              <MenuItem key={i} value={option.id}>
                {option.display}
              </MenuItem>
            ))}
          </TextField>
          }

          {category.pivotField &&
          <TextField
            variant="outlined"
            select
            label={category.pivotField.attribute.name}
            fullWidth
            disabled={loading}
            value={pivotFieldOptionId}
            onChange={e => setPivotFieldOptionId(e.target.value)}
            style={{
              marginTop: 10,
              marginBottom: 10,
              maxWidth: '100%'
            }}
            SelectProps={{
              renderValue: (selected) => {
                const option = category.pivotField.options.find((item, i) => item.id === selected)
                return option.label
              },
              MenuProps: {
                disableAutoFocusItem: true,
                style: {
                  maxHeight: 500
                }
              }
            }}
            error={validation?.pivotFieldOptionId?.isInvalid}
            helperText={validation?.pivotFieldOptionId?.message || (category.pivotField?.helperText?.trim()?.length > 0 && category.pivotField?.helperText)}
          >
            {category.pivotField.options.map((option, i) => (
              <MenuItem key={i} value={option.id}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                <ListItemText primary={option.label} style={{ margin: 0 }}/>
                {option.desc?.length > 0 &&
                <span style={{
                  margin: 0,
                  fontSize: 11
                }}>
                  {option.desc}
                </span>
                }
                </div>
              </MenuItem>
            ))}
          </TextField>
          }

          {category.specFields.map((field) => {
            if(category.pivotField) {
              if(field.excludePivotFieldOptionIds?.includes(pivotFieldOptionId)) {
                return null
              }

              if(
                field.includePivotFieldOptionIds?.length > 0 && 
                !field.includePivotFieldOptionIds?.includes(pivotFieldOptionId)
              ) {
                return null
              }
            }
            const MAX_LENGTH = field.maxLength || PRODUCT_SPEC_VALUE_MAX_LENGTH
            const NUMERIC_MAX_LENGTH = field.maxLength || PRODUCT_NUMERIC_SPEC_VALUE_MAX_LENGTH

            if(field.type === 'year') {
              const startYear = 1901
              let year = new Date().getFullYear()
              const years = []
              while(year >= startYear) {
                years.push(year.toString())
                year--
              }

              return (
                <TextField
                  key={field.id}
                  variant="outlined"
                  select
                  label={field.attribute.name}
                  fullWidth
                  disabled={loading}
                  value={specs[field.attribute.id]?.trim() === '' ? '' : specs[field.attribute.id]}
                  onChange={_setSpecs(field)}
                  style={{
                    marginTop: 10,
                    marginBottom: 10
                  }}
                  error={validation[field.attribute.id]?.isInvalid}
                  helperText={validation[field.attribute.id]?.message || (field.helperText?.trim()?.length > 0 && field.helperText)}
                  SelectProps={{
                    MenuProps: {
                      style: {
                        maxHeight: 500
                      }
                    }
                  }}
                >
                  {years.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )
            } else if(field.options?.length > 0) {
              if(field.isAutocomplete) {
                return (
                  <Autocomplete
                    key={field.id}
                    options={field.options}
                    getOptionLabel={(option) => option}
                    getOptionSelected={(option, value) => option === value}
                    value={specs[field.attribute.id]?.trim() === '' ? null : specs[field.attribute.id]}
                    noOptionsText="Pilihan tidak ditemukan"
                    forcePopupIcon={field.isEnum}
                    disableClearable={!field.isEnum}
                    freeSolo={!field.isEnum}
                    value={specs[field.attribute.id]}
                    onChange={(_, value) => _setSpecs(field)({ target: { value }})}
                    renderInput={(params) => 
                      <TextField 
                        {...params} 
                        label={field.attribute.name}
                        fullWidth
                        disabled={loading} 
                        variant="outlined"
                        style={{
                          marginTop: 10,
                          marginBottom: 10
                        }}
                        error={validation[field.attribute.id]?.isInvalid}
                        helperText={validation[field.attribute.id]?.message || (field.helperText?.trim()?.length > 0 && field.helperText)}
                      />
                    }
                  />
                )
              }
              return (
                <TextField
                  key={field.id}
                  variant="outlined"
                  select
                  label={field.attribute.name}
                  fullWidth
                  disabled={loading}
                  value={field.isMulti ? specs[field.attribute.id] : (specs[field.attribute.id]?.trim() === '' ? '' : specs[field.attribute.id])}
                  onChange={_setSpecs(field)}
                  style={{
                    marginTop: 10,
                    marginBottom: 10
                  }}
                  error={validation[field.attribute.id]?.isInvalid}
                  helperText={validation[field.attribute.id]?.message || (field.helperText?.trim()?.length > 0 && field.helperText)}
                  SelectProps={{
                    multiple: field.isMulti,
                    renderValue: (selected) => {
                      if(field.isMulti)
                        return selected.join(', ')

                      return selected
                    },
                    MenuProps: {
                      disableAutoFocusItem: true,
                      style: {
                        maxHeight: 500
                      }
                    }
                  }}
                >
                  {field.options.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {field.isMulti &&
                        <Checkbox
                          checked={specs[field.attribute.id].indexOf(option) > -1} 
                        />
                      }
                      <ListItemText primary={option}/>
                    </MenuItem>
                  ))}
                </TextField>
              )
              
            } else {
              if(['int', 'float'].indexOf(field.type) > -1) {
                return (
                  <NumberFormat
                    customInput={TextField}
                    variant="outlined"
                    label={field.attribute.name}
                    fullWidth
                    disabled={loading}
                    value={specs[field.attribute.id]}
                    onValueChange={_setSpecs(field)}
                    style={{
                      marginTop: 10,
                      marginBottom: 10
                    }}
                    inputProps={{
                      pattern: "[0-9]*",
                      type: "text",
                      inputMode: "numeric",
                      maxLength: NUMERIC_MAX_LENGTH
                    }}
                    error={validation[field.attribute.id]?.isInvalid}
                    helperText={validation[field.attribute.id]?.message || (field.helperText?.trim()?.length > 0 && field.helperText)}
                    allowNegative={field.min < 0}
                    decimalSeparator={field.type === 'float' ? '.' : null}
                    decimalScale={2}
                    InputProps={{
                      startAdornment: field.prefix?.trim()?.length > 0 ? (
                        <InputAdornment>
                          {field.prefix}
                        </InputAdornment>
                      ) : null,
                      endAdornment: field.suffix?.trim()?.length > 0 ? (
                        <InputAdornment>
                          {field.suffix}
                        </InputAdornment>
                      ) : null
                    }}
                  />
                )
              }
              return (
                <TextField
                  key={field.id}
                  variant="outlined"
                  label={field.attribute.name}
                  fullWidth
                  disabled={loading}
                  multiline={field.numberOfLines > 1}
                  rows={field.numberOfLines?.toString()}
                  value={specs[field.attribute.id]}
                  onChange={_setSpecs(field)}
                  style={{
                    marginTop: 10,
                    marginBottom: 10
                  }}
                  error={validation[field.attribute.id]?.isInvalid}
                  helperText={validation[field.attribute.id]?.message || (field.helperText?.trim()?.length > 0 && field.helperText)}
                  inputProps={{
                    maxLength: field.numberOfLines > 1 ? (field.maxLength || (PRODUCT_SPEC_VALUE_MAX_LENGTH * field.numberOfLines)) : MAX_LENGTH
                  }}
                  InputProps={{
                    startAdornment: field.prefix?.trim()?.length > 0 ? (
                      <InputAdornment>
                        {field.prefix}
                      </InputAdornment>
                    ) : null,
                    endAdornment: field.suffix?.trim()?.length > 0 ? (
                      <InputAdornment>
                        {field.suffix}
                      </InputAdornment>
                    ) : null
                  }}
                />
              )
            }
          })}

          {!category.forceLocationInput &&
          <div style={{
            height: 1,
            backgroundColor: HEADER_BORDER_BOTTOM_COLOR,
            margin: '10px 0'
          }}/>
          }

          <h3 style={{ margin: '10px 0'}}>Lokasi</h3>

          {!category.forceLocationInput &&
          <>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ margin: 0, fontWeight: 500 }}>Sinkronisasi lokasi dengan alamat Anda</span>
              <Switch
                checked={syncLocation}
                onChange={() => setSyncLocation(prev => !prev)}
              />
            </div>
          

            <div style={{ 
              fontSize: 12, 
              color: 'grey', 
              margin: 0, 
              marginBottom: 10, 
              marginTop: 5,
              lineHeight: '16px'
            }}>
              Lokasi iklan ini akan otomatis ter-update jika anda meng-update alamat di&nbsp;
              <ButtonBase
                onClick={() => window.open('/edit/ad.account')}
                style={{
                  fontSize: 'inherit',
                  color: Color.primary,
                  verticalAlign: 'baseline'
                }}
              >
                Akun Iklan
              </ButtonBase>&nbsp;Anda.
            </div>
          </>
          }

          <Autocomplete
            disabled={syncLocation || loading}
            options={provinces}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.administrativeAreaId === value.administrativeAreaId}
            noOptionsText="Pilihan tidak ditemukan"
            loadingText="Memuat..."
            value={syncLocation ? me?.store?.address?.province : province}
            onChange={(_, value) => setProvince(prev => {
              if(prev?.administrativeAreaId === value?.administrativeAreaId)
                return prev
              return value
            })}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Provinsi"
                fullWidth
                disabled={syncLocation || loading} 
                variant="outlined"
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                error={validation.province?.isInvalid}
                helperText={validation.province?.message}
              />
            }
          />

          <Autocomplete
            disabled={Validator.isEmpty(province) || syncLocation || loading}
            loading={loadingCities}
            options={cities}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.administrativeAreaId === value.administrativeAreaId}
            noOptionsText="Pilihan tidak ditemukan"
            loadingText="Memuat..."
            value={syncLocation ? me?.store?.address?.city : city}
            onChange={(_, value) => setCity(prev => {
              if(prev?.administrativeAreaId === value?.administrativeAreaId)
                return prev
              return value
            })}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Kota/Kabupaten"
                fullWidth
                disabled={Validator.isEmpty(province) || syncLocation || loading} 
                variant="outlined"
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                error={validation.city?.isInvalid}
                helperText={validation.city?.message}
              />
            }
          />

          <Autocomplete
            disabled={Validator.isEmpty(province) || Validator.isEmpty(city) || syncLocation || loading}
            loading={loadingDistricts}
            options={districts}
            getOptionLabel={(option) => option.name}
            getOptionSelected={(option, value) => option.administrativeAreaId === value.administrativeAreaId}
            noOptionsText="Pilihan tidak ditemukan"
            loadingText="Memuat..."
            value={syncLocation ? me?.store?.address?.district : district}
            onChange={(_, value) => setDistrict(prev => {
              if(prev?.administrativeAreaId === value?.administrativeAreaId)
                return prev
              return value
            })}
            renderInput={(params) => 
              <TextField 
                {...params} 
                label="Kecamatan"
                fullWidth
                disabled={Validator.isEmpty(province) || Validator.isEmpty(city) || syncLocation || loading} 
                variant="outlined"
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                error={validation.district?.isInvalid}
                helperText={validation.district?.message}
              />
            }
          />

          <Button
            label="Publikasi"
            thick
            loading={loading}
            fullWidth
            style={{
              marginTop: 10
            }}
            onClick={create}
          />
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  provinces: graphql`
    fragment CreateProductScreen_provinces on AdministrativeArea @relay(plural: true) {
      administrativeAreaId,
      name
    }
  `,
  category: graphql`
    fragment CreateProductScreen_category on Category {
      id,
      name,
      path,
      requiresProductCondition,
      showsProductConditionField,
      forceLocationInput,
      rentalDurationIds,
      maxImageUpload,
      listingType,
      ancestors {
        id,
        name
      },
      pivotField {
        id,
        attribute {
          id,
          name
        },
        options {
          id,
          label,
          desc,
          isDefault
        }
      },
      specFields {
        id,
        attribute {
          id,
          name
        },
        isAutocomplete,
        isRequired,
        type,
        max,
        min,
        options,
        isEnum,
        isMulti,
        prefix,
        suffix,
        numberOfLines,
        maxLength,
        emptyErrorMessage,
        helperText,
        excludePivotFieldOptionIds,
        includePivotFieldOptionIds
      }
    }
  `,
  me: graphql`
    fragment CreateProductScreen_me on User {
      id,
      store {
        id,
        address {
          province {
            administrativeAreaId,
            name
          },
          city {
            administrativeAreaId,
            name
          },
          district {
            administrativeAreaId,
            name
          }
        }
      }
    }
  `,
  productConditions: graphql`
    fragment CreateProductScreen_productConditions on ProductCondition @relay(plural: true) {
      id,
      display
    }
  `,
  rentalDurations: graphql`
    fragment CreateProductScreen_rentalDurations on Unit @relay(plural: true) {
      id,
      display,
      name,
      value
    }
  `
})