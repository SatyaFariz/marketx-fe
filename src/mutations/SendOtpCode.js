import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation SendOtpCodeMutation($phoneNumber: String!) {
    sendOtpCode(phoneNumber: $phoneNumber) {
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
            const payload = res.sendOtpCode
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}
