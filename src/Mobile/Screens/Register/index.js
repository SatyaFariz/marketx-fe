// import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/register',
  components: () => [import('./RegisterScreen')],
  // query: graphql`
  //   query MainScreenAdminQuery($id: String!) {
  //     me {
  //       id,
  //       ...RequiresRegisterContainer_user
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
  render: ([RegisterScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <RegisterScreen
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk