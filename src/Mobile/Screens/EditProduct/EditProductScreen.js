import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import useAppContext from '../../hooks/useAppContext'
import { useRef, useEffect, useState } from 'react'
import { Button, TextField, InputAdornment, MenuItem } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Validator from '../../../helpers/validator'
import UpdateProduct from '../../../mutations/UpdateProduct'
import BackButton from '../../Components/BackButton'
import cleanNonNumericChars from '../../../helpers/cleanNonNumericChars'

const Component = props => {
  const { product } = props
  const _isMounted = useRef(true)
  const scrollRef = useRef()
  const [showHeader, setShowHeader] = useState(false)
  const { history, environment } = useAppContext()
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState(product.price.toString())
  const [desc, setDesc] = useState(product.desc)
  const [specs, setSpecs] = useState(product.category.specFields.reduce((obj, currentVal) => {
    obj[currentVal.attribute.id] = product.specs.find(item => item.attribute.id === currentVal.attribute.id)?.value || ''
    return obj
  }, {}))
  const [carouselPos, setCarouselPos] = useState(0)
  const [validation, setValidation] = useState({ isValid: false })
  const [loading, setLoading] = useState(false)

  const handleCarouselChange = (value) => {
    if(!isNaN(value))
      setCarouselPos(value)
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

  const _setPrice = (e) => {
    const { value } = e.target
    const allowedChars = '0123456789'
    if(value !== '0' && (value === '' || allowedChars.includes(value[value.length - 1])))
      setPrice(value)
  }

  const isValid = () => {
    const specsRules = product.category.specFields.reduce((rules, currentVal) => {
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
      }
    ])

    const validation = validator.validate({
      ...specs,
      name,
      price,
      desc
    })

    setValidation(validation)
    return validation.isValid
  }

  const save = () => {
    if(isValid() && !isClean() && !loading) {
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

  const isClean = () => {
    for(let i = 0; i < product.specs.length; i++) {
      const spec = product.specs[i]
      const attributeId = spec.attribute.id
      const { value } = spec
      if(value?.trim() !== specs[attributeId]?.trim()) {
        return false
      }
    }

    return (
      product.name.trim() === name.trim() &&
      product.desc.trim() === desc.trim() &&
      product.price === parseFloat(price)
    )
  }

  useEffect(() => {
    scrollRef.current.onscroll = () => {
      const pageYOffset = scrollRef.current.scrollTop
      setShowHeader(pageYOffset > window.innerWidth)
    }

    return () => _isMounted.current = false
  }, [])

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundImage: 'linear-gradient(rgb(76, 76, 76), transparent)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 2
      }}>
        <BackButton color="white"/>
      </div>

      <div style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 3,
        display: showHeader ? 'flex' : 'none',
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
          <Carousel onChange={handleCarouselChange} value={carouselPos} draggable={product.images.length > 1}>
            {product.images.map((item, i) => {
              return (
                <div key={i} style={{
                  position: 'relative',
                  width: '100vw',
                  paddingBottom: '100%'
                }}>
                  <img
                    src={item.url}
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
              )
            })}
          </Carousel>
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
                  marginRight: 2,
                  // border: `1px solid ${Color.primary}`,
                }}/>
              )
            })}
          </div>
          }
          <Button
            disableElevation
            variant="contained"
            style={{
              backgroundColor: 'white',
              margin: 15,
              position: 'absolute',
              right: 0,
              bottom: 0
            }}
            onClick={() => history.push(`/edit/photos/${product.id}`)}
          >
            Edit Photos
          </Button>
        </div>

        <div style={{
          padding: '10px 15px'
        }}>
          <h3 style={{ margin: '10px 0'}}>{product.category.name}</h3>
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

          <TextField
            variant="outlined"
            label="Product Price"
            value={price}
            onChange={_setPrice}
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
          />
          
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

          <h3 style={{ margin: '10px 0'}}>Specifications</h3>

          {product.category.specFields.map((field) => {
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
            disableElevation
            variant="contained"
            fullWidth
            style={{
              fontTransform: 'none',
              marginTop: 10
            }}
            onClick={save}
          >
            Save
          </Button>
        </div>
      </div>
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
      category {
        id,
        name,
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
  `
})