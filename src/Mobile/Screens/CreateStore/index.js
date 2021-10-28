import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/new/ad.account',
  components: () => [import('./CreateStoreScreen')],
  query: graphql`
    query CreateStoreQuery {
      me {
        id,
        ...CreateStoreScreen_me
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
            me={data.me}
            provinces={data.administrativeAreas}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk