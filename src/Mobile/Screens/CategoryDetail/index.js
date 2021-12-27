import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/c/:id/detail',
  components: () => [import('./CategoryDetailScreen')],
  query: graphql`
    query CategoryDetailScreenQuery($id: String!) {
      me {
        id,
        isAdmin,
        ...FixedAddressBar_me
      },
      category(id: $id) {
        ...CategoryDetailScreen_category
      },
      attributes {
        id,
        ...CategoryDetailScreen_attributes
      },
      rentalDurations {
        ...CategoryDetailScreen_rentalDurations
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CategoryDetailScreen], data, context) => {
    
    return {
      title: 'Market X',
      component: (
        <FixedAddressBar me={data?.me}>
          {data.me?.isAdmin &&
          <CategoryDetailScreen
            me={data.me}
            category={data.category}
            attributes={data.attributes}
            rentalDurations={data.rentalDurations}
          />
          }
        </FixedAddressBar>
      )
    }
  }
}


export default chunk