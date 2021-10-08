import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/attributes',
  components: () => [import('./AttributesListScreen')],
  query: graphql`
    query AttributesListScreenQuery {
      me {
        id,
        isAdmin
      },
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([AttributesListScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          {data.me?.isAdmin &&
          <AttributesListScreen
            me={data.me}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk