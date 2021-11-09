import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation PublishPostMutation($id: String!, $title: String, $content: String!) {
    publishPost(id: $id, title: $title, content: $content) {
      actionInfo {
        hasError,
        message
      },
      post {
        id,
        title,
        content,
        isDeleted
      }
    }
  }
`

const PublishPost = (environment, variables, callback) => {
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
            const payload = res.publishPost
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default PublishPost