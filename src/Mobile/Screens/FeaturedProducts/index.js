import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/featured',
  components: () => [import('./FeaturedProductsScreen')],
  query: graphql`
    query FeaturedProductsQuery {
      me {
        id,
        isAdmin
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([FeaturedProductsScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          {data.me?.isAdmin &&
          <FeaturedProductsScreen
          />
          }
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk