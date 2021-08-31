import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation DeleteProductImagesMutation($id: String!, $imageIds: [String!]!) {
    deleteProductImages(id: $id, imageIds: $imageIds) {
      actionInfo {
        hasError,
        message
      },
      product {
        id,
        images {
          id,
          url,
          display
        }
      }
    }
  }
`

const DeleteProductImages = (environment, variables, callback) => {
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
            const payload = res.deleteProductImages
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default DeleteProductImages
