import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/terms-of-service',
  components: () => [import('./TermsOfServiceScreen')],
  query: graphql`
    query TermsOfServiceScreenQuery {
      posts(type: terms_of_service, limit: 1) {
        id,
        ...TermsOfServiceScreen_posts
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([TermsOfServiceScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <TermsOfServiceScreen
            posts={data?.posts}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk