import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/category/:id',
  components: () => [import('./CategoryScreen')],
  query: graphql`
    query CategorySearchScreenQuery($id: String!) {
      category(id: $id) {
        id,
        ...CategoryScreen_category
      },
      me {
        id,
        ...FixedAddressBar_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CategoryScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          <CategoryScreen
            category={data.category}
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk