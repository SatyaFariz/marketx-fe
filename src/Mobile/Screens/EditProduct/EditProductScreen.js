import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'
import { Button, TextField, InputAdornment, Input } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Component = props => {
  const { product } = props
  const scrollRef = useRef()
  const [showHeader, setShowHeader] = useState(false)
  const { history } = useAppContext()
  const [name, setName] = useState(product.name)
  const [price, setPrice] = useState('')
  const [desc, setDesc] = useState(product.desc)

  const _setPrice = (e) => {
    const { value } = e.target
    const allowedChars = '0123456789'
    if(value !== '0' && (value === '' || allowedChars.includes(value[value.length - 1])))
      setPrice(value)
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
          />

          <h3 style={{ margin: '10px 0'}}>Specifications</h3>

          {product.category.specFields.map((field) => {
            return (
              <TextField
                key={field.id}
                variant="outlined"
                label={field.attribute.name}
                fullWidth
                style={{
                  marginTop: 10,
                  marginBottom: 10
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
          >
            Create
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