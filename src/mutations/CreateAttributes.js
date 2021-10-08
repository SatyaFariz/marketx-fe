import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation CreateAttributesMutation($names: [String!]!) {
    createAttributes(names: $names) {
      actionInfo {
        hasError,
        message
      },
      attributes {
        id,
        name
      }
    }
  }
`

const CreateAttributes = (environment, variables, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: (store) => {
        const payload = store.getRootField('createAttributes', variables)
        const createAttributes = payload?.getLinkedRecords('attributes')
      
        const root = store.getRoot()
        const attributes = root.getLinkedRecords('attributes')
        
        if(attributes)
          root.setLinkedRecords([...createAttributes, ...attributes], 'attributes')
      },
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.createAttributes
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default CreateAttributes
