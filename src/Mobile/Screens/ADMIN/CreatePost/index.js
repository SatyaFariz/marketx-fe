import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../../Components/FixedAddressBar'

const chunk = {
  path: '/new/post',
  components: () => [import('./CreatePostPage')],
  query: graphql`
    query CreatePostPageQuery {
      me {
        id,
        isAdmin
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CreatePostPage], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <CreatePostPage
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk