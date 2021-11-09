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
      },
      me {
        id,
        ...EditProductPhotosScreen_me,
        ...FixedAddressBar_me
      }
    }
  `,
  prepareVariables: ({ params }) => params,
  render: ([EditProductPhotosScreen], data, context) => {
    
    return {
      title: 'Rental App',
      component: (
        <FixedAddressBar me={data?.me}>
          <EditProductPhotosScreen
            product={data.product}
            me={data.me}
          />
        </FixedAddressBar>
        
      )
    }
  }
}


export default chunk