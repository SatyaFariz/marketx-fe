import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation IncrementLeadsMutation($productId: String!) {
    incrementLeads(productId: $productId) {
      actionInfo {
        hasError
      }
    }
  }
`

const IncrementLeads = (environment, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables: {},
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.incrementLeads
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default IncrementLeads
