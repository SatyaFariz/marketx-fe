// import graphql from 'babel-plugin-relay/macro'

const chunk = {
  path: '/',
  components: () => [import('./MainScreen')],
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
  render: ([MainScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        
        <MainScreen
        />
      )
    }
  }
}


export default chunk