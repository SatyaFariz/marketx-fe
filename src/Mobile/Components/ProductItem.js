import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import formatCurrency from '../../helpers/formatCurrency'
import { ButtonBase } from '@material-ui/core'

import Link from '../Components/Link'
import Color from '../Constants/Color'

const Component = props => {
  const { product, showsListingType = true } = props
  return (
    <ButtonBase href={`/item/${product.id}`} component={Link} style={{
      display: 'flex'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '100%',
        }}>
          <img
            src={product.mainImage?.url}
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

          {(product.isSuspended || !product.isPublished) &&
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              bottom: 0,
              backgroundColor: 'pink',
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div style={{
                padding: '0 10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <span style={{ 
                  color: 'white',
                  textAlign: 'center'
                }}>
                  {product.isSuspended ? 'Iklan ini dinonaktifkan' : 'Iklan ini belum dipublikasi'}
                </span>
              </div>
            </div>
          }
        </div>
        <span style={{
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 5,
          marginTop: 8
        }}>{product.name}</span>
        {product.rentalDuration ?
        <span style={{
          fontSize: 16
        }}>{formatCurrency(product.price)} / {product.rentalDuration.display}</span>
        :
        <span style={{
          fontSize: 16
        }}>{formatCurrency(product.price)}</span>
        }
        {showsListingType && product.listingType === 'rental_product' &&
          <span style={{
            fontSize: 12,
            color: Color.link,
            marginTop: 7
          }}>Rental</span>
        }
        {showsListingType && product.listingType === 'service' &&
          <span style={{
            fontSize: 12,
            color: Color.link,
            marginTop: 7
          }}>Jasa</span>
        }
      </div>
    </ButtonBase>
  )
}

export default createFragmentContainer(Component, {
  product: graphql`
    fragment ProductItem_product on Product {
      id,
      name,
      price,
      listingType,
      isPublished,
      isSuspended,
      mainImage {
        id,
        url
      },
      rentalDuration {
        display
      }
    }
  `
})