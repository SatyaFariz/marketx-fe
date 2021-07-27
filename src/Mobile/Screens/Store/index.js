import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/store/:id',
  components: () => [import('./StoreScreen')],
  query: graphql`
    query StoreScreenQuery {
      me {
        id
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