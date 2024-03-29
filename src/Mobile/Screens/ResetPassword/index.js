import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/reset-password',
  components: () => [import('./ResetPasswordScreen')],
  query: graphql`
    query ResetPasswordScreenQuery {
      me {
        id,
        ...ResetPasswordScreen_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([ResetPasswordScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <ResetPasswordScreen
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk