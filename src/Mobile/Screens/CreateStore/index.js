import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/new/store',
  components: () => [import('./CreateStoreScreen')],
  query: graphql`
    query CreateStoreQuery {
      me {
        id,
        store {
          id,
          ...CreateStoreScreen_store
        }
      },
      administrativeAreas {
        ...CreateStoreScreen_provinces
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([CreateStoreScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <CreateStoreScreen
            store={data.me?.store}
            provinces={data.administrativeAreas}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk