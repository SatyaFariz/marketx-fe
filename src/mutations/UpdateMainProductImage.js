import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateMainProductImageMutation($id: String!, $imageId: String!) {
    updateMainProductImage(id: $id, imageId: $imageId) {
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

const UpdateMainProductImage = (environment, variables, callback) => {
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
            const payload = res.updateMainProductImage
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateMainProductImage
