import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/edit/ad.account',
  components: () => [import('./EditStoreScreen')],
  query: graphql`
    query EditStoreSearchScreenQuery {
      me {
        id,
        ...EditStoreScreen_me,
        ...FixedAddressBar_me
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
        <FixedAddressBar me={data?.me}>
          <EditStoreScreen
            provinces={data.administrativeAreas}
            me={data.me}
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk