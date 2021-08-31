import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/new/product/:categoryId',
  components: () => [import('./CreateProductScreen')],
  query: graphql`
    query CreateProductScreenQuery($categoryId: String!) {
      category(id: $categoryId) {
        id,
        ...CreateProductScreen_category
      },
      me {
        id,
        ...CreateProductScreen_me
      },
      productConditions {
        ...CreateProductScreen_productConditions
      },
      rentalDurations {
        ...CreateProductScreen_rentalDurations
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([CreateProductScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <CreateProductScreen
            category={data.category}
            me={data.me}
            productConditions={data.productConditions}
            rentalDurations={data.rentalDurations}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk