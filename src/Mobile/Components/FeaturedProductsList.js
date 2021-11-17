import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import ProductItem from './ProductItem'

const Component = props => {
  const { featuredProducts } = props
  return (
    <div style={{
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 20,
    }}>
      <h1 style={{
        fontSize: 24,
        fontWeight: 'bold',
      }}>Featured</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumnGap: 20,
        gridRowGap: 15,
        alignItems: 'start'
      }}>
        {featuredProducts.map((item, i) => {
          return (
            <ProductItem 
              product={item} 
              key={item.id} 
              me={null}
              showsLocation
            />
          )
        })}
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  featuredProducts: graphql`
    fragment FeaturedProductsList_featuredProducts on Product @relay(plural: true) {
      id,
      ...ProductItem_product
    }
  `
})