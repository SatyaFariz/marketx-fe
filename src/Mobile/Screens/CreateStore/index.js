import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/new/store',
  components: () => [import('./CreateStoreScreen')],
  query: graphql`
    query CreateStoreQuery {
      me {
        id
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
            provinces={data.administrativeAreas}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk