import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/reset-password',
  components: () => [import('./ResetPasswordScreen')],
  query: graphql`
    query ResetPasswordScreenQuery {
      me {
        id,
        ...ResetPasswordScreen_me,
        ...FixedAddressBar_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([ResetPasswordScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me}>
          <ResetPasswordScreen
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk