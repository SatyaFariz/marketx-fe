import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UnsuspendProductMutation($id: String!) {
    unsuspendProduct(id: $id) {
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

const UnsuspendProduct = (environment, variables, callback) => {
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
            const payload = res.unsuspendProduct
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UnsuspendProduct
