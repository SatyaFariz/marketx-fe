import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation ChangePasswordMutation($currentPassword: String!, $newPassword: String!) {
    changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
      hasError,
      message
    }
  }
`

const Change = (environment, variables, callback) => {
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
            const payload = res.changePassword
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Change
