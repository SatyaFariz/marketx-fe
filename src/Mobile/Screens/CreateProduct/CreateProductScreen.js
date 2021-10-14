import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import { useRef, useEffect, useState } from 'react'
import { TextField, InputAdornment, MenuItem, ListItemText, Checkbox } from '@material-ui/core'
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

const megabytes = 1048576
const autocompleteFilter = createFilterOptions()

const Component = props => {
  const [loading, setLoading] = useState(false)
  const [carouselPos, setCarouselPos] = useState(0)
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    accept: 'image/jpeg',
    disabled: loading,
    noClick: true,
    noKeyboard: true,
    maxSize: 6 * megabytes,
    onDrop: async (acceptedFiles) => {
      if(acceptedFiles.length > 0) {
        const images = await Promise.all(acceptedFiles.map(file => {
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
  const { category, me, productConditions, rentalDurations } = props
  const _isMounted = useRef(true)
  const scrollRef = useRef()
  const headerRef = useRef()
  const { history, environment, pathname } = useAppContext()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [productConditionId, setProductConditionId] = useState(null)
  const [rentalDurationId, setRentalDurationId] = useState(null)
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
      if(currentVal.isRequired) {
        rules.push({
          field: currentVal.attribute.id,
          method: Validator.isEmpty,
          validWhen: false,
          message: 'This field is required.'
        })
      }
      
      return rules
    }, [])

    const validator = new Validator([
      ...specsRules,
      {
        field: 'name',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'price',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      {
        field: 'price',
        method: (price) => parseFloat(price, 10) > 0,
        validWhen: true,
        message: 'Price must be above 0.'
      },
      {
        field: 'desc',
        method: Validator.isEmpty,
        validWhen: false,
        message: 'This field is required.'
      },
      ...(category.requiresProductCondition ? [
        {
          field: 'productConditionId',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'This field is required.'
        },
      ] : []),
      ...(category.listingType === 'rental_product' ? [
        {
          field: 'rentalDurationId',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'This field is required.'
        },
      ] : [])
    ])

    const validation = validator.validate({
      ...specs,
      name,
      price,
      desc,
      ...(category.requiresProductCondition ? { productConditionId } : {}),
      ...(category.listingType === 'rental_product' ? { rentalDurationId } : {})
    })

    setValidation(validation)
    if(files.length === 0) {
      alert('Set a photo')
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
          specs: productSpecs
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
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10
        }}>
          <IoChevronBackSharp size={32}/>
        </div>
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
          }}>Create Product</h1>
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
            {files.length > 1 &&
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
                right: 0,
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
            label="Product Name"
            fullWidth
            disabled={loading}
            value={name}
            onChange={e => setName(e.target.value.trimLeft())}
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
            label="Product Price"
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
              inputMode: "numeric"
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
            label="Durasi Rental"
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
            {rentalDurations.map((option, i) => (
              <MenuItem key={i} value={option.id}>
                {option.value} {option.name}
              </MenuItem>
            ))}
          </TextField>
          }

          <TextField
            variant="outlined"
            label="Product Description"
            disabled={loading}
            value={desc}
            onChange={e => setDesc(e.target.value.trimLeft())}
            multiline
            rows="8"
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            error={validation?.desc?.isInvalid}
            helperText={validation?.desc?.message}
          />

          {(category.showsProductConditionField || 
            category.specFields.length > 0) &&
          <h3 style={{ margin: '10px 0'}}>Specifications</h3>
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

          {category.specFields.map((field) => {
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
                  helperText={validation[field.attribute.id]?.message}
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
                    onChange={(_, value) => _setSpecs(field)({ target: { value }})}
                    filterOptions={field.isEnum ? undefined : (options, params) => {
                      const inputValue = params.inputValue.trim()
                      const filtered = autocompleteFilter(options, { ...params, inputValue })
              
                      // Create a new value
                      if (inputValue !== '' && !filtered.find(item => item.trim().toLowerCase() === inputValue.toLowerCase())) {
                        filtered.push(inputValue)
                      }
              
                      return filtered
                    }}
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
                        helperText={validation[field.attribute.id]?.message}
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
                  helperText={validation[field.attribute.id]?.message}
                  SelectProps={{
                    multiple: field.isMulti,
                    renderValue: (selected) => selected.join(', '),
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
                      inputMode: "numeric"
                    }}
                    error={validation[field.attribute.id]?.isInvalid}
                    helperText={validation[field.attribute.id]?.message}
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
                  helperText={validation[field.attribute.id]?.message}
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
  category: graphql`
    fragment CreateProductScreen_category on Category {
      id,
      name,
      path,
      requiresProductCondition,
      showsProductConditionField,
      listingType,
      ancestors {
        id,
        name
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
        numberOfLines
      }
    }
  `,
  me: graphql`
    fragment CreateProductScreen_me on User {
      id,
      store {
        id
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