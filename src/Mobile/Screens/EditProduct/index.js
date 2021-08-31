import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/edit/product/:id',
  components: () => [import('./EditProductScreen')],
  query: graphql`
    query EditProductScreenQuery($id: String!) {
      product(id: $id) {
        id,
        ...EditProductScreen_product
      },
      productConditions {
        ...EditProductScreen_productConditions
      },
      rentalDurations {
        ...EditProductScreen_rentalDurations
      },
      me {
        ...EditProductScreen_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([EditProductScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <EditProductScreen
            me={data.me}
            product={data.product}
            productConditions={data.productConditions}
            rentalDurations={data.rentalDurations}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk