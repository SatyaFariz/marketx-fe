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
  const { product } = props
  const [showHeader, setShowHeader] = useState(false)
  const { history } = useAppContext()

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <div 
        onClick={() => history.goBack()}
        style={{
          paddingRight: 10,
          paddingLeft: 10,
          zIndex: 1
        }}>
          <IoChevronBackSharp size={32}/>
        </div>
        
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
          }}>Photos</h1>
        </div>
      </div>

      <div style={{
        top: HEADER_HEIGHT,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: 10,
          padding: 15
        }}>
        {product.images.map(item => {
          return (
            <div
              key={item.id}
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
              }}
            >
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
        </div>
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  product: graphql`
    fragment EditProductPhotosScreen_product on Product {
      id,
      images {
        id,
        url
      }
    }
  `
})