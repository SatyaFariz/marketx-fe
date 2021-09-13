import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/change-password',
  components: () => [import('./ChangePasswordScreen')],
  query: graphql`
    query ChangePasswordScreenQuery {
      me {
        id,
        ...ChangePasswordScreen_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([ChangePasswordScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <ChangePasswordScreen
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk