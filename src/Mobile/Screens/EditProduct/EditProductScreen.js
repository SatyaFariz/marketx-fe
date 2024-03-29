import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import useAppContext from '../../hooks/useAppContext'
import { useRef, useEffect, useState } from 'react'
import { TextField, InputAdornment, MenuItem, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, CircularProgress } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import { createFilterOptions } from '@material-ui/lab/Autocomplete'
import Validator from '../../../helpers/validator'
import UpdateProduct from '../../../mutations/UpdateProduct'
import DeleteProduct from '../../../mutations/DeleteProduct'
import BackButton from '../../Components/BackButton'
import cleanNonNumericChars from '../../../helpers/cleanNonNumericChars'
import { IoEllipsisVertical, IoCloseOutline } from 'react-icons/io5'
import Sheet from 'react-modal-sheet'
import Link from '../../Components/Link'
import Button from '../../Components/Button'
import NumberFormat from 'react-number-format'
import { Swiper, SwiperSlide } from 'swiper/react'

const autocompleteFilter = createFilterOptions()

const Component = props => {
  const { me, product, productConditions, rentalDurations } = props
  const merchantId = product.merchant.id
  const _isMounted = useRef(true)
  const scrollRef = useRef()
  const headerRef = useRef()
  const { history, environment } = useAppContext()
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price.toString())
  const [desc, setDesc] = useState(product.desc)
  const [specs, setSpecs] = useState(product.category[product.category.length - 1].specFields.reduce((obj, currentVal) => {
    obj[currentVal.attribute.id] = product.specs.find(item => item.attribute.id === currentVal.attribute.id)?.value || ''
    return obj
  }, {}))
  const [productConditionId, setProductConditionId] = useState(product.condition?.id)
  const [rentalDurationId, setRentalDurationId] = useState(product.rentalDuration?.id)
  const [carouselPos, setCarouselPos] = useState(0)
  const [validation, setValidation] = useState({ isValid: false })
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [showBottomSheet, setShowBottomSheet] = useState(false)

  const handleSwipe = (obj) => {
    setCarouselPos(obj.activeIndex)
  }

  const _setSpecs = field => e => {
    let value = (e.target.value || '').trimLeft()
    if(field.type === 'int') {
      value = cleanNonNumericChars(value, { allowNegative: field.min < 0 })
      if(value.startsWith('0'))
        value = parseInt(value, 10).toString()

      value = value.substr(0, 12)
    }
    setSpecs(prev => ({ ...prev, [field.attribute.id]: value }))
  }

  const _setPrice = (values) => {
    const { value } = values
    const allowedChars = '0123456789'
    if(value !== '0' && (value === '' || allowedChars.includes(value[value.length - 1])))
      setPrice(value)
  }

  const isValid = () => {
    const specsRules = product.category[product.category.length - 1].specFields.reduce((rules, currentVal) => {
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
      ...(product.category[product.category.length - 1].requiresProductCondition ? [
        {
          field: 'productConditionId',
          method: Validator.isEmpty,
          validWhen: false,
          message: 'This field is required.'
        },
      ] : []),
      ...(product.category[product.category.length - 1].listingType === 'rental_product' ? [
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
      ...(product.category[product.category.length - 1].requiresProductCondition ? { productConditionId } : {}),
      ...(product.category[product.category.length - 1].listingType === 'rental_product' ? { rentalDurationId } : {})
    })

    setValidation(validation)
    return validation.isValid
  }

  const save = (isPublished) => {
    if(isValid() && (!isClean() || isPublished !== product.isPublished) && !loading) {
      const productSpecs = []
      for(let key in specs) {
        productSpecs.push({
          attributeId: key,
          value: specs[key]
        })
      }

      const input = {
        name,
        price: parseFloat(price),
        desc,
        isPublished,
        productConditionId,
        rentalDurationId,
        specs: productSpecs
      }

      setLoading(true)
      UpdateProduct(environment, { id: product.id, input }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            // do sth
          }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  const deleteProduct = () => {
    const yes = window.confirm('Do you want to delete this product?')
    if(yes) {
      setDeleting(true)
      DeleteProduct(environment, { id: product.id }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            _isMounted.current && setShowBottomSheet(false)
            history.goBack()
          }
        }

        _isMounted.current && setDeleting(false)
      })
    }
  }

  const isClean = () => {
    for(let i = 0; i < product.specs.length; i++) {
      const spec = product.specs[i]
      const attributeId = spec.attribute.id
      const { value } = spec
      if(value?.trim() !== specs[attributeId]?.trim()) {
        return false
      }
    }

    const _isClean = (
      product.name.trim() === name.trim() &&
      product.desc.trim() === desc.trim() &&
      product.price === parseFloat(price) &&
      (product.condition?.id || '') === (productConditionId || '') &&
      (product.rentalDuration?.id || '') === (rentalDurationId || '')
    )

    if(_isClean) {
      alert('Tidak ada perubahan.')
    }

    return _isClean
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
    if(merchantId !== me.id) {
      history.replace('/')
    }
  }, [me, merchantId, history])


  if(merchantId !== me.id) return null

  return (
    <div>
      <div style={{
        
      }}>
        <div style={{
          height: HEADER_HEIGHT,
          position: 'absolute',
          width: '100%',
          backgroundImage: 'linear-gradient(rgb(76, 76, 76), transparent)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          zIndex: 2
        }}>
          <BackButton color="white"/>

          <IconButton 
            onClick={() => setShowBottomSheet(true)}
            style={{
              zIndex: 2,
              marginRight: 5
            }}
          >
            <IoEllipsisVertical size={24} color="white"/>
          </IconButton>
        </div>

        <div 
        ref={headerRef}
        style={{
          height: HEADER_HEIGHT,
          position: 'absolute',
          width: '100%',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          zIndex: 3,
          display: 'none',
          borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
        }}>
          <BackButton/>
          <IconButton 
            onClick={() => setShowBottomSheet(true)}
            style={{
              zIndex: 2,
              marginRight: 5
            }}
          >
            <IoEllipsisVertical size={24} color="black"/>
          </IconButton>
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
            }}>Edit Product</h1>
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
            height: '100vw',
          }}>
            {product.images.length > 1 ?
            <>
              <Swiper 
                onSlideChange={handleSwipe}
                virtual={false}
                style={{ zIndex: 0 }}
              >
                {product.images.map((item, i) => {
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
                          src={item.url}
                          alt={item.name}
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
              {product.images.length > 1 &&
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
                {product.images.map((item, i) => {
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
              src={product.images[0].url}
              alt={product.name}
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
            {product.category.map((item, i) => {
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
              value={name}
              onChange={e => setName(e.target.value.trimLeft())}
              fullWidth
              disabled={loading}
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
              value={price}
              onValueChange={_setPrice}
              fullWidth
              disabled={loading}
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

            {product.category[product.category.length - 1].listingType === 'rental_product' &&
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
              value={desc}
              onChange={e => setDesc(e.target.value.trimLeft())}
              multiline
              rows="8"
              fullWidth
              disabled={loading}
              style={{
                marginTop: 10,
                marginBottom: 10
              }}
              error={validation?.desc?.isInvalid}
              helperText={validation?.desc?.message}
            />

            {(product.category[product.category.length - 1].showsProductConditionField || 
              product.category[product.category.length - 1].specFields.length > 0) &&
            <h3 style={{ margin: '10px 0'}}>Specifications</h3>
            }

            {product.category[product.category.length - 1].showsProductConditionField &&
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

            {product.category[product.category.length - 1].specFields.map((field) => {
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
                    value={specs[field.attribute.id]?.trim() === '' ? undefined : specs[field.attribute.id]}
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
                      value={specs[field.attribute.id]}
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
                    value={specs[field.attribute.id]?.trim() === '' ? undefined : specs[field.attribute.id]}
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
                    {field.options.map((option, i) => (
                      <MenuItem key={i} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                    {!field.options.includes(specs[field.attribute.id]) &&
                      <MenuItem value={specs[field.attribute.id]}>
                        {specs[field.attribute.id]}
                      </MenuItem>
                    }
                  </TextField>
                )
                
              }
              return (
                <TextField
                  key={field.id}
                  variant="outlined"
                  label={field.attribute.name}
                  fullWidth
                  disabled={loading}
                  value={specs[field.attribute.id]}
                  onChange={_setSpecs(field)}
                  style={{
                    marginTop: 10,
                    marginBottom: 10
                  }}
                  error={validation[field.attribute.id]?.isInvalid}
                  helperText={validation[field.attribute.id]?.message}
                  inputProps={['int', 'float'].includes(field.type) && {
                    pattern: "[0-9]*",
                    type: "text",
                    inputMode: "numeric"
                  }}
                />
              )
            })}

            <Button
              thick
              label={!product.isPublished ? 'Publikasi' : 'Simpan'}
              // disabled={product.isPublished && isClean()}
              fullWidth
              style={{
                marginTop: 10
              }}
              onClick={!product.isPublished ? () => save(true) : () => save(product.isPublished)}
              loading={loading}
            />
          </div>
        </div>

        <Sheet 
          snapPoints={[200]}
          isOpen={showBottomSheet} 
          onClose={() => setShowBottomSheet(false)}
          disableDrag
        >
          <Sheet.Container style={{
            borderRadius: 0
          }}>
            <Sheet.Content>
              <div style={{
                height: '100%'
              }}>
                <List>
                  <ListItem
                    button
                    component={Link}
                    href={`/edit/photos/${product.id}`}
                  >
                    <ListItemText primary="Edit photos"/>
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => save(!product.isPublished)}
                  >
                    <ListItemText primary={product.isPublished ? 'Unpublish' : "Publish"}/>
                    {loading &&
                    <ListItemSecondaryAction>
                      <CircularProgress size={18}/>
                    </ListItemSecondaryAction>
                    }
                  </ListItem>
                  <ListItem
                    button
                    onClick={deleteProduct}
                  >
                    <ListItemText primary="Delete"/>
                    {deleting &&
                    <ListItemSecondaryAction>
                      <CircularProgress size={18}/>
                    </ListItemSecondaryAction>
                    }
                  </ListItem>
                </List>
              </div>
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop onClick={() => setShowBottomSheet(false)}/>
        </Sheet>
      </div>
      
      {product.isDeleted &&
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(6px)',
        zIndex: 9999999999
      }}>
        <div style={{
          position: 'absolute',
          left: 5,
          top: 5
        }}>
          <IconButton
            onClick={() => history.goBack()}
          >
            <IoCloseOutline size={30} color="white"/>
          </IconButton>
        </div>
        <h6 style={{ color: 'white', fontSize: 24 }}>This product has been deleted</h6>
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  product: graphql`
    fragment EditProductScreen_product on Product {
      id,
      name,
      price,
      desc,
      isPublished,
      isDeleted,
      images {
        id,
        url
      },
      specs {
        id,
        attribute {
          id
        },
        value
      },
      condition {
        id,
      },
      rentalDuration {
        id
      },
      merchant {
        id
      },
      category {
        id,
        name,
        requiresProductCondition,
        showsProductConditionField,
        listingType,
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
          isEnum
        }
      },
    }
  `,
  me: graphql`
    fragment EditProductScreen_me on User {
      id
    }
  `,
  productConditions: graphql`
    fragment EditProductScreen_productConditions on ProductCondition @relay(plural: true) {
      id,
      display
    }
  `,
  rentalDurations: graphql`
    fragment EditProductScreen_rentalDurations on Unit @relay(plural: true) {
      id,
      display,
      name,
      value
    }
  `
})