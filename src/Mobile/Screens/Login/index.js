import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/login',
  components: () => [import('./LoginScreen')],
  query: graphql`
    query LoginScreenQuery {
      me {
        id,
        ...LoginScreen_me,
        ...FixedAddressBar_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([LoginScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me} desktopComingSoon={false}>
          <LoginScreen
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk