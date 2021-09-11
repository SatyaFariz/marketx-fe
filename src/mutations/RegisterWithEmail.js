import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation RegisterWithEmailMutation(
    $email: Email!, 
    $password: String!,
    $verificationCode: String!,
    $name: String!
  ) {
    registerWithEmail(email: $email, password: $password, name: $name, verificationCode: $verificationCode) {
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
            const payload = res.registerWithEmail
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Register
