import graphql from 'babel-plugin-relay/macro'
import FixedAddressBar from '../../Components/FixedAddressBar'

const chunk = {
  path: '/edit/photos/:productId',
  components: () => [import('./EditProductPhotosScreen')],
  query: graphql`
    query EditProductPhotosScreenQuery($productId: String!) {
      product(id: $productId) {
        id,
        ...EditProductPhotosScreen_product
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([EditProductPhotosScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar>
          <EditProductPhotosScreen
            product={data.product}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk