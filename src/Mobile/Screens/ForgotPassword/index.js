import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/forgot-password',
  components: () => [import('./ForgotPasswordScreen')],
  query: graphql`
    query ForgotPasswordScreenQuery {
      me {
        id,
        ...ForgotPasswordScreen_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([ForgotPasswordScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <ForgotPasswordScreen
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk