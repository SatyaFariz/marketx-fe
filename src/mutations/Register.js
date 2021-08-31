import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation RegisterMutation($loginId: String!, $password: String!, $name: String!) {
    register(loginId: $loginId, password: $password, name: $name) {
      actionInfo {
        hasError,
        message
      }
    }
  }
`

const Register = (environment, variables, callback) => {
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
            const payload = res.register
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Register
