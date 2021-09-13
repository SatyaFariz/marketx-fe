import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation LoginWithEmailMutation($email: String!, $password: String!) {
    loginWithEmail(email: $email, password: $password) {
      actionInfo {
        hasError,
        message
      }
    }
  }
`

const Login = (environment, variables, callback) => {
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
            const payload = res.loginWithEmail
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Login
