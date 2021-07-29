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
        <img
          src={product.images[0]?.url}
          alt={product.name}
          style={{ width: '100%', aspectRatio: 1, borderRadius: 10, marginBottom: 10 }}
        />
        <span style={{
          fontSize: 16,
          fontWeight: 500,
          marginBottom: 5
        }}>{product.name}</span>
        <span style={{
          fontSize: 16
        }}>{formatCurrency(product.price)} / {product.rentalDuration.display}</span>
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
      images {
        url
      },
      rentalDuration {
        display
      }
    }
  `
})