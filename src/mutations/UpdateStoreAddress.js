import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateStoreAddressMutation($id: String!, $address: AddressInput!) {
    updateStoreAddress(id: $id, address: $address) {
      actionInfo {
        hasError,
        message
      },
      store {
        id
      }
    }
  }
`

const UpdateStoreAddress = (environment, variables, callback) => {
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
            const payload = res.updateStoreAddress
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateStoreAddress
