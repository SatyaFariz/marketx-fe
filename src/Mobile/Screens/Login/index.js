import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/login',
  components: () => [import('./LoginScreen')],
  query: graphql`
    query LoginScreenQuery {
      me {
        id,
        ...LoginScreen_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([LoginScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <LoginScreen
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk