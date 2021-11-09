import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/ad.account/:id',
  components: () => [import('./StoreScreen')],
  query: graphql`
    query StoreScreenQuery($id: String!) {
      me {
        id,
        ...StoreScreen_me,
        ...FixedAddressBar_me
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
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          {data &&
          <StoreScreen
            me={data.me}
            categories={data.categories}
            store={data.store}
            products={data}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk