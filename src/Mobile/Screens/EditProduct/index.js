import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/edit/item/:id',
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
        ...EditProductScreen_me,
        ...FixedAddressBar_me
      },
      administrativeAreas {
        ...EditProductScreen_provinces
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([EditProductScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          <EditProductScreen
            me={data.me}
            product={data.product}
            productConditions={data.productConditions}
            rentalDurations={data.rentalDurations}
            provinces={data.administrativeAreas}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk