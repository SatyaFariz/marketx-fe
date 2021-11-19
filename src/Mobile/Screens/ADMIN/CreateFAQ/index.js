import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../../Components/FixedAddressBar'

const chunk = {
  path: '/new/faq',
  components: () => [import('./CreateFAQPage')],
  query: graphql`
    query CreateFAQPageQuery {
      me {
        id,
        isAdmin
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CreateFAQPage], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar>
          <CreateFAQPage
            me={data?.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk