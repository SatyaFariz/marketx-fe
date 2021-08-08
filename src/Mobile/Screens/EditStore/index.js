import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/edit/store',
  components: () => [import('./EditStoreScreen')],
  query: graphql`
    query EditStoreSearchScreenQuery {
      me {
        id,
        store {
          id,
          ...EditStoreScreen_store
        }
      },
      administrativeAreas {
        ...EditStoreScreen_provinces
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([EditStoreScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <EditStoreScreen
            provinces={data.administrativeAreas}
            store={data.me?.store}
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk