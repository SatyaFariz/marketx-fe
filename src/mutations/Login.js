import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation LoginMutation($loginId: String!, $password: String!) {
    login(loginId: $loginId, password: $password) {
      actionInfo {
        hasError,
        message
      }
    }
  }
`

export default (environment, variables, callback) => {
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
            const payload = res.login
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}
