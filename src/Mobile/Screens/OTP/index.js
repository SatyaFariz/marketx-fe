// import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/otp/:phoneNumber',
  components: () => [import('./OTPScreen')],
  // query: graphql`
  //   query MainScreenAdminQuery($id: String!) {
  //     me {
  //       id,
  //       ...RequiresOTPContainer_user
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
  render: ([OTPScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <OTPScreen
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk