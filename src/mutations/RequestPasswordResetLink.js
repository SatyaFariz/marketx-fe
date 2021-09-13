import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation RequestPasswordResetLinkMutation($email: Email!) {
    requestPasswordResetLink(email: $email) {
      hasError,
      message
    }
  }
`

const Request = (environment, variables, callback) => {
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
            const payload = res.requestPasswordResetLink
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Request
