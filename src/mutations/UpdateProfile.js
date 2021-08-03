import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateProfileMutation($otpCode: String, $input: UpdateProfileInput!) {
    updateProfile(otpCode: $otpCode, input: $input) {
      actionInfo {
        hasError,
        message
      },
      user {
        id,
        name,
        mobileNumber,
        profilePicture {
          id,
          url
        }
      }
    }
  }
`

const UpdateProfile = (environment, variables, file, callback) => {
  const uploadables = { file }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      uploadables,
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.updateProfile
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateProfile
