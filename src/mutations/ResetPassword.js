import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation ResetPasswordMutation($id: String!, $token: String!, $newPassword: String!) {
    resetPassword(id: $id, token: $token, newPassword: $newPassword) {
      hasError,
      message
    }
  }
`

const Reset = (environment, variables, callback) => {
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
            const payload = res.resetPassword
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Reset
