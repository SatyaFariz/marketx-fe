import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation IncrementViewsMutation($productId: String!) {
    incrementViews(productId: $productId) {
      actionInfo {
        hasError
      }
    }
  }
`

const IncrementViews = (environment, variables, callback) => {
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
            const payload = res.incrementViews
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default IncrementViews
