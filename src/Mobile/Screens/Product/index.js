import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/product/:id',
  components: () => [import('./ProductScreen')],
  query: graphql`
    query ProductScreenQuery($id: String!) {
      product(id: $id) {
        id
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
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk