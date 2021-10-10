import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/category/:id/detail',
  components: () => [import('./CategoryDetailScreen')],
  query: graphql`
    query CategoryDetailScreenQuery($id: String!) {
      me {
        id,
        isAdmin
      },
      category(id: $id) {
        ...CategoryDetailScreen_category
      },
      attributes {
        id,
        ...CategoryDetailScreen_attributes
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CategoryDetailScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          {data.me?.isAdmin &&
          <CategoryDetailScreen
            me={data.me}
            category={data.category}
            attributes={data.attributes}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk