import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/store',
  components: () => [import('./StoreScreen')],
  query: graphql`
    query StoreScreenQuery {
      me {
        id,
        store {
          id
        }
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([StoreScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          {data &&
          <StoreScreen
            data={data}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk