import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/',
  components: () => [import('./HomeScreen')],
  query: graphql`
    query HomeScreenQuery {
      me {
        id,
        ...HomeScreen_me,
        ...FixedAddressBar_me
      }
      categories {
        id,
        ...HomeScreen_categories
      },
      featuredProducts {
        id,
        ...HomeScreen_featuredProducts
      }
    }
  `,
  // prepareVariables: ({ params }) => params,
  render: ([HomeScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me}>
          {data &&
          <HomeScreen
            me={data.me}
            categories={data.categories}
            featuredProducts={data.featuredProducts}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk