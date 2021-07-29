import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR, DIVIDER_COLOR } from '../../Constants'
import Color from '../../Constants/Color'
import { IoChevronBackSharp } from 'react-icons/io5'
import useAppContext from '../../hooks/useAppContext'
import formatCurrency from '../../../helpers/formatCurrency'
import { useRef, useEffect, useState } from 'react'
import Link from '../../Components/Link'
import { Button, TextField } from '@material-ui/core'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const Component = props => {
  const { category } = props
  const scrollRef = useRef()
  const [showHeader, setShowHeader] = useState(false)
  const { history } = useAppContext()

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
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
          />

          <TextField
            variant="outlined"
            label="Product Price"
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
          />

          <TextField
            variant="outlined"
            label="Product Description"
            multiline
            rows="8"
            fullWidth
            style={{
              marginTop: 10,
              marginBottom: 10
            }}
          />

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
  category: graphql`
    fragment CreateProductScreen_category on Category {
      id,
      name,
      specFields {
        attribute {
          id,
          name
        },
        isRequired
      }
    }
  `
})