import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/profile',
  components: () => [import('./EditProfileScreen')],
  query: graphql`
    query EditProfileQuery {
      me {
        id,
        ...EditProfileScreen_me
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([EditProfileScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <EditProfileScreen
            me={data.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk