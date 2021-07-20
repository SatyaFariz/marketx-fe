import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/merchant/:id',
  components: () => [import('./MerchantScreen')],
  query: graphql`
    query MerchantScreenQuery($id: String!) {
      user(id: $id) {
        id,
        ...MerchantScreen_merchant
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([MerchantScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <MerchantScreen
            merchant={data.merchant}
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk