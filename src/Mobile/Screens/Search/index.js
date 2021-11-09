import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/search',
  components: () => [import('./SearchScreen')],
  query: graphql`
    query SearchScreenRootQuery {
      me {
        id,
        ...FixedAddressBar_me
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([SearchScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          <SearchScreen
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk