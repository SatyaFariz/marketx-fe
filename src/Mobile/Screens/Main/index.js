import graphql from 'babel-plugin-relay/macro'
import RequiresLoginContainer from '../RequiresLoginContainer'
import Layout from '../Layout'
const chunk = {
  path: '/recipe/:id',
  components: () => [import('./RecipePage')],
  query: graphql`
    query RecipePageAdminQuery($id: String!) {
      me {
        id,
        ...RequiresLoginContainer_user
      },
      recipe(id: $id) {
        ...RecipePage_recipe
      },
      categories {
        ...RecipePage_categories
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([RecipePage], data, context) => {
    
    return {
      title: 'Tuan Rumah',
      component: (
        <RequiresLoginContainer user={data.me}>
          <Layout>
            {true ?
            <RecipePage
              recipe={data.recipe}
              categories={data.categories}
            />
            :  
            <RecipePage/>
          }
          </Layout>
        </RequiresLoginContainer>
      )
    }
  }
}


export default chunk