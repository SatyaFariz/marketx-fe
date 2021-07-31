import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'
import { Button, TextField, InputAdornment } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Validator from '../../../helpers/validator'
import UpdateProduct from '../../../mutations/UpdateProduct'

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
    const value = e.target.value.trimLeft()
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
        price,
        desc,
        specs: productSpecs
      }

      alert(JSON.stringify(input, null, 2))
      // setLoading(true)
      // UpdateProduct(environment, { loginId: mobileNumber, password: code }, (payload, error) => {
      //   if(error) {
      //     console.log(error)
      //   } else if(payload) {
      //     const { hasError, message } = payload.actionInfo
      //     alert(message)
      //     if(!hasError) {
      //       // do sth
      //     }
      //   }

      //   _isMounted.current && setLoading(false)
      // })
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
      setShowHeader(pageYOffset > 230)
    }

    return () => _isMounted.current = false
  }, [])

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        position: 'absolute',
        width: '100%',
        // backgroundImage: 'linear-gradient(rgb(76, 76, 76), transparent)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 2
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10
        }}>
          <IoChevronBackSharp size={32} color={'white'}/>
        </div>
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
          // backgroundColor: 'red',
          height: 'calc(100vw * 77/137)',
        }}>
          <Carousel onChange={handleCarouselChange} value={carouselPos} draggable={product.images.length > 1}>
            {product.images.map((item, i) => {
              return (
                <div key={i} style={{
                  width: '100vw',
                  backgroundColor: 'red',
                  height: 'calc(100vw * 77/137)',
                  backgroundImage: `url("${item.url}")`,
                  backgroundPosition:'center'
                }}/>
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
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
            error={validation?.desc?.isInvalid}
            helperText={validation?.desc?.message}
          />

          <h3 style={{ margin: '10px 0'}}>Specifications</h3>

          {product.category.specFields.map((field) => {
            return (
              <TextField
                key={field.id}
                variant="outlined"
                label={field.attribute.name}
                fullWidth
                value={specs[field.attribute.id]}
                onChange={_setSpecs(field)}
                style={{
                  marginTop: 10,
                  marginBottom: 10
                }}
                error={validation[field.attribute.id]?.isInvalid}
                helperText={validation[field.attribute.id]?.message}
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
          isRequired
        }
      },
    }
  `
})