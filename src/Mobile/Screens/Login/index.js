// import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/login',
  components: () => [import('./LoginScreen')],
  // query: graphql`
  //   query MainScreenAdminQuery($id: String!) {
  //     me {
  //       id,
  //       ...RequiresLoginContainer_user
  //     },
  //     recipe(id: $id) {
  //       ...MainScreen_recipe
  //     },
  //     categories {
  //       ...MainScreen_categories
  //     }
  //   }
  // `,
  // prepareVariables: ({ params }) => params,
  render: ([LoginScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <LoginScreen
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk