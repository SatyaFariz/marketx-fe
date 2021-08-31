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
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([AboutUsScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <AboutUsScreen
            posts={data?.posts}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk