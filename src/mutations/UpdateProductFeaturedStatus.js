import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateProductFeaturedStatusMutation($id: String!, $isFeatured: Boolean!) {
    updateProductFeaturedStatus(id: $id, isFeatured: $isFeatured) {
      actionInfo {
        hasError,
        message
      },
      product {
        id,
        isFeatured
      }
    }
  }
`

const UpdateProductFeaturedStatus = (environment, variables, callback) => {
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
            const payload = res.updateProductFeaturedStatus
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateProductFeaturedStatus
