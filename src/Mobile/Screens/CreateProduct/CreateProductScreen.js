import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'
import { Button, TextField, InputAdornment } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Validator from '../../../helpers/validator'

const Component = props => {
  const { category } = props
  const _isMounted = useRef(true)
  const scrollRef = useRef()
  const [showHeader, setShowHeader] = useState(false)
  const { history, environment } = useAppContext()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [specs, setSpecs] = useState(category.specFields.reduce((obj, currentVal) => {
    obj[currentVal.attribute.id] = ''
    return obj
  }, {}))
  const [validation, setValidation] = useState({ isValid: false })
  const [loading, setLoading] = useState(false)

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

  const create = () => {
    if(isValid() && !loading) {
      
    }
  }

  useEffect(() => {
    scrollRef.current.onscroll = () => {
      const pageYOffset = scrollRef.current.scrollTop
      setShowHeader(pageYOffset > 230)
    }
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
          height: 'calc(100vw * 77/137)',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
        }}>
          <Button
            disableElevation
            variant="contained"
            style={{
              backgroundColor: 'white',
              margin: 15
            }}
          >
            Add Photo
          </Button>
        </div>

        <div style={{
          padding: '10px 15px'
        }}>
          <h3 style={{ margin: '10px 0'}}>{category.name}</h3>
          <TextField
            variant="outlined"
            label="Product Name"
            fullWidth
            value={name}
            onChange={e => setName(e.target.value.trimLeft())}
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
            fullWidth
            value={price}
            onChange={_setPrice}
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

          {category.specFields.map((field) => {
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
            onClick={create}
          >
            Create
          </Button>
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
      specFields {
        id,
        attribute {
          id,
          name
        },
        isRequired
      }
    }
  `
})