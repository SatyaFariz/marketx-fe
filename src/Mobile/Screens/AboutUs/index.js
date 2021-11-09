import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/about-us',
  components: () => [import('./AboutUsScreen')],
  query: graphql`
    query AboutUsScreenQuery {
      posts(type: about_us, limit: 1) {
        id,
        ...AboutUsScreen_posts
      },
      me {
        id,
        ...AboutUsScreen_me,
        ...FixedAddressBar_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([AboutUsScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          <AboutUsScreen
            posts={data?.posts}
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk