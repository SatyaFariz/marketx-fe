import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/privacy-policy',
  components: () => [import('./PrivacyPolicyScreen')],
  query: graphql`
    query PrivacyPolicyScreenQuery {
      posts(type: privacy_policy, limit: 1) {
        id,
        ...PrivacyPolicyScreen_posts
      },
      me {
        id,
        ...PrivacyPolicyScreen_me,
        ...FixedAddressBar_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([PrivacyPolicyScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          <PrivacyPolicyScreen
            posts={data?.posts}
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk