import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/attributes',
  components: () => [import('./AttributesListScreen')],
  query: graphql`
    query AttributesListScreenQuery {
      me {
        id,
        isAdmin,
        ...FixedAddressBar_me
      },
      attributes {
        id,
        ...AttributesListScreen_attributes
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([AttributesListScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me}>
          {data.me?.isAdmin &&
          <AttributesListScreen
            me={data.me}
            attributes={data.attributes}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk