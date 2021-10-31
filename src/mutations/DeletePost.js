import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation DeletePostMutation($id: String!) {
    deletePost(id: $id) {
      actionInfo {
        hasError,
        message
      },
      post {
        id,
        isDeleted
      }
    }
  }
`

const DeletePost = (environment, variables, callback) => {
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
            const payload = res.deletePost
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default DeletePost
