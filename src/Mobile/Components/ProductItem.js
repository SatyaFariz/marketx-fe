import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import formatCurrency from '../../helpers/formatCurrency'

import Link from '../Components/Link'

const Component = props => {
  const { product } = props
  return (
    <Link href={`/product/${product.id}`}>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
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
        </div>
        <span style={{
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 5,
          marginTop: 8
        }}>{product.name}</span>
        {product.rentalDuration &&
        <span style={{
          fontSize: 16
        }}>{formatCurrency(product.price)} / {product.rentalDuration.display}</span>
        }
      </div>
    </Link>
  )
}

export default createFragmentContainer(Component, {
  product: graphql`
    fragment ProductItem_product on Product {
      id,
      name,
      price,
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