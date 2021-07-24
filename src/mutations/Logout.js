import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation LogoutMutation {
    logout {
      hasError,
      message
    }
  }
`

const Logout = (environment, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {},
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.logout
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Logout
