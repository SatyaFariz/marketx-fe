import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation SuspendProductMutation($id: String!, $suspensionReasonId: String!) {
    suspendProduct(id: $id, suspensionReasonId: $suspensionReasonId) {
      actionInfo {
        hasError,
        message
      },
      product {
        id,
        isSuspended
      }
    }
  }
`

const SuspendProduct = (environment, variables, callback) => {
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
            const payload = res.suspendProduct
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default SuspendProduct
