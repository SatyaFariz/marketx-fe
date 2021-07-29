import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/store',
  components: () => [import('./StoreScreen')],
  query: graphql`
    query StoreScreenQuery {
      me {
        id,
        store {
          id,
          ...StoreScreen_store
        }
      },
      categories {
        ...StoreScreen_categories
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([StoreScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          {data &&
          <StoreScreen
            categories={data.categories}
            store={data.me?.store}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk