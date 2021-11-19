import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../../../Components/FixedAddressBar'

const chunk = {
  path: '/posts',
  components: () => [import('./PostsListPage')],
  query: graphql`
    query DesktopPostsListPageQuery {
      me {
        id,
        isAdmin
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([PostsListPage], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar>
          <PostsListPage
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk