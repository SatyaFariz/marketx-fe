import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/',
  components: () => [import('./MainScreen')],
  query: graphql`
    query MainScreenQuery {
      categories {
        id,
        ...ExploreTab_categories
      },
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([MainScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <MainScreen
            categories={data.categories}
          />
        </FixedAddressBar>
      )
    }
  }
}


export default chunk