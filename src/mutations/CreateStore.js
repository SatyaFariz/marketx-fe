import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation CreateStoreMutation($name: String!, $whatsappNumber: String!, $whatsappVerificationCode: String!, $isForBusiness: Boolean!, $address: AddressInput!) {
    createStore(name: $name, whatsappNumber: $whatsappNumber, whatsappVerificationCode: $whatsappVerificationCode, isForBusiness: $isForBusiness, address: $address) {
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

const CreateStore = (environment, variables, callback) => {
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
            const payload = res.createStore
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default CreateStore
