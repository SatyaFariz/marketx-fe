import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation DeleteProductMutation($id: String!) {
    deleteProduct(id: $id) {
      actionInfo {
        hasError,
        message
      },
      product {
        id,
        isDeleted
      }
    }
  }
`

const DeleteProduct = (environment, variables, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.deleteProduct
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default DeleteProduct
