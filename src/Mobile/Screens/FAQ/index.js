import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/faq',
  components: () => [import('./FAQScreen')],
  query: graphql`
    query FAQScreenQuery {
      posts(type: faq, limit: 100) {
        id,
        ...FAQScreen_posts
      },
      me {
        id,
        ...FAQScreen_me,
        ...FixedAddressBar_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([FAQScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          <FAQScreen
            posts={data?.posts}
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk