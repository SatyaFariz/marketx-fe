import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/store/:id',
  components: () => [import('./StoreScreen')],
  query: graphql`
    query StoreScreenQuery($id: String!) {
      me {
        id
      },
      store(id: $id) {
        id,
        ...StoreScreen_store
      },
      categories {
        ...StoreScreen_categories
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([StoreScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          {data &&
          <StoreScreen
            categories={data.categories}
            store={data.store}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk