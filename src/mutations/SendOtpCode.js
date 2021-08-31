import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation SendOtpCodeMutation($mobileNumber: String!, $action: UserActionEnum) {
    sendOtpCode(mobileNumber: $mobileNumber, action: $action) {
      actionInfo {
        hasError,
        message
      },
      expiry
    }
  }
`

const SendOtpCode = (environment, variables, callback) => {
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
            const payload = res.sendOtpCode
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default SendOtpCode
