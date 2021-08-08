import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateStoreMutation($id: String!, $name: String!, $whatsappNumber: String!) {
    updateStore(id: $id, name: $name, whatsappNumber: $whatsappNumber) {
      actionInfo {
        hasError,
        message
      },
      store {
        id,
        name,
        whatsappNumber,
        address {
          fullAddress,
          province {
            administrativeAreaId,
            name
          },
          city {
            administrativeAreaId,
            name
          },
          district {
            administrativeAreaId,
            name
          }
        }
      }
    }
  }
`

const UpdateStore = (environment, variables, uploadables, callback) => {
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
            const payload = res.updateStore
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateStore
