import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation SetMainProductImageMutation($id: String!, $imageId: String!) {
    setMainProductImage(id: $id, imageId: $imageId) {
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

const SetMainProductImage = (environment, variables, callback) => {
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
            const payload = res.setMainProductImage
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default SetMainProductImage
