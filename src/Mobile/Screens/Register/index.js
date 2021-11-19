import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/register',
  components: () => [import('./RegisterScreen')],
  query: graphql`
    query RegisterQuery {
      me {
        id,
        ...RegisterScreen_me,
        ...FixedAddressBar_me
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([RegisterScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me}>
          <RegisterScreen
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk