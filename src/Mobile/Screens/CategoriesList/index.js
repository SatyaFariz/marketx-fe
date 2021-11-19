import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/categories',
  components: () => [import('./CategoriesListScreen')],
  query: graphql`
    query CategoriesListScreenQuery {
      me {
        id,
        isAdmin,
        ...FixedAddressBar_me
      },
      categories(hasChild: false) {
        ...CategoriesListScreen_categories
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CategoriesListScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me}>
          {data.me?.isAdmin &&
          <CategoriesListScreen
            me={data.me}
            categories={data.categories}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk