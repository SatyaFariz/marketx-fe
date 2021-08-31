import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/product/:id',
  components: () => [import('./ProductScreen')],
  query: graphql`
    query ProductScreenQuery($id: String!) {
      product(id: $id) {
        id,
        ...ProductScreen_product
      },
      me {
        id,
        ...ProductScreen_me
      },
      suspensionReasons {
        ...ProductScreen_suspensionReasons
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([ProductScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <ProductScreen
            product={data.product}
            me={data.me}
            suspensionReasons={data.suspensionReasons}
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk