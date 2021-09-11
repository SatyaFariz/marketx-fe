import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation SendVerificationCodeMutation($id: String!, $action: UserActionEnum) {
    sendVerificationCode(id: $id, action: $action) {
      actionInfo {
        hasError,
        message
      },
      expiry,
      cooldownExpiry
    }
  }
`

const Send = (environment, variables, callback) => {
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
            const payload = res.sendVerificationCode
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Send
