import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateStoreBannerMutation($id: String!) {
    updateStoreBanner(id: $id) {
      actionInfo {
        hasError,
        message
      },
      store {
        id,
        banner {
          id,
          url,
          display
        }
      }
    }
  }
`

const UpdateStoreBanner = (environment, variables, file, callback) => {
  const uploadables = { file }
  commitMutation(
    environment,
    {
      mutation,
      uploadables,
      variables,
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.updateStoreBanner
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateStoreBanner
