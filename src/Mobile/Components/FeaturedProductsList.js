import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import formatCurrency from '../../helpers/formatCurrency'

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
        // lineHeight: 27,
        fontWeight: 'bold',
      }}>Featured Products</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumnGap: 20,
        gridRowGap: 15
      }}>
        {featuredProducts.map((item, i) => {
          return (
            <div style={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <img
                src={item.images[0]?.url}
                alt={item.name}
                style={{ width: '100%', aspectRatio: 1, borderRadius: 10, marginBottom: 10 }}
              />
              <span style={{
                fontSize: 16,
                fontWeight: 500,
                marginBottom: 5
              }}>{item.name}</span>
              <span style={{
                fontSize: 16
              }}>{formatCurrency(item.price)} / {item.rentalPeriodUnit.display}</span>
            </div>
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
      name,
      price,
      images {
        url
      },
      rentalPeriodUnit {
        display
      }
    }
  `
})