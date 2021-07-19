import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/category/:id',
  components: () => [import('./CategoryScreen')],
  query: graphql`
    query CategoryScreenQuery($id: String!) {
      category(id: $id) {
        id
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CategoryScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <CategoryScreen
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk