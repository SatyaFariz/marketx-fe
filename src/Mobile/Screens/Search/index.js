// import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/search',
  components: () => [import('./SearchScreen')],
  // query: graphql`
  //   query MainScreenAdminQuery($id: String!) {
  //     me {
  //       id,
  //       ...RequiresSearchContainer_user
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
  render: ([SearchScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <SearchScreen
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk