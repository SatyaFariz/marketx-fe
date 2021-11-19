import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/ad.account/:id',
  components: () => [import('./StoreScreen')],
  query: graphql`
    query StoreScreenQuery($id: String!) {
      me {
        id,
        ...FixedAddressBar_me
      },
      userSession {
        ...StoreScreen_userSession
      },
      store(id: $id) {
        id,
        ...StoreScreen_store
      },
      categories(hasChild: false) {
        ...StoreScreen_categories
      },
      ...StoreScreen_products @arguments(storeId: $id)
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([StoreScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me}>
          {data &&
          <StoreScreen
            me={data.me}
            categories={data.categories}
            store={data.store}
            userSession={data.userSession}
            products={data}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk