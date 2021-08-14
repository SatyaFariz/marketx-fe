import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import { useRef, useEffect, useState } from 'react'
import { Button, TextField, InputAdornment, MenuItem } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Validator from '../../../helpers/validator'
import { useDropzone } from 'react-dropzone'
import { fromImage } from 'imtool'
import CreateProduct from '../../../mutations/CreateProduct'
import BackButton from '../../Components/BackButton'

const megabytes = 1048576

const Component = props => {
  const [carouselPos, setCarouselPos] = useState(0)
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    accept: 'image/jpeg',
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
  const { category, me, productConditions } = props
  const _isMounted = useRef(true)
  const scrollRef = useRef()
  const headerRef = useRef()
  const { history, environment, pathname } = useAppContext()
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState('')
  const [productConditionId, setProductConditionId] = useState(null)
  const [specs, setSpecs] = useState(category.specFields.reduce((obj, currentVal) => {
    obj[currentVal.attribute.id] = ''
    return obj
  }, {}))
  const [validation, setValidation] = useState({ isValid: false })
  const [loading, setLoading] = useState(false)

  const handleCarouselChange = (value) => {
    if(!isNaN(value))
      setCarouselPos(value)
  }

  const _setSpecs = field => e => {
    const value = e.target.value?.trimLeft() || null
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
    if(files.length === 0) {
      alert('Set a photo')
      return false
    }
    return validation.isValid
  }

  const create = () => {
    if(isValid() && !loading) {
      const productSpecs = []
      for(let key in specs) {
        productSpecs.push({
          attributeId: key,
          value: specs[key]
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
          specs: productSpecs
        }
      }

      setLoading(true)
      CreateProduct(environment, variables, files, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          // const { hasError, message } = payload.actionInfo
          // alert(message)
          // if(!hasError) {
          //   // do sth
          // }
        }

        _isMounted.current && setLoading(false)
      })
    }
  }

  useEffect(() => {
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
          
          <Carousel key={files.map(x => x.preview).join()} onChange={handleCarouselChange} value={carouselPos} draggable={files.length > 1}>
            {files.map((item, i) => {
              return (
                <div key={i} style={{
                  position: 'relative',
                  width: '100vw',
                  paddingBottom: '100%'
                }}>
                  <img
                    src={item.preview}
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
                  marginRight: 2,
                  // border: `1px solid ${Color.primary}`,
                }}/>
              )
            })}
          </div>
          }
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
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
              onClick={open}
            >
              Edit Photos
            </Button>
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
          {[...category.parents, category].map((item, i) => {
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

          {category.showsProductConditionField &&
          <TextField
            variant="outlined"
            select
            label="Kondisi"
            fullWidth
            disabled={loading}
            value={productConditionId}
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
            Publish
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
      path,
      requiresProductCondition,
      showsProductConditionField,
      parents {
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
        isEnum
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
  `
})