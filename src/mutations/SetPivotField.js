import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation SetPivotFieldMutation($categoryId: String!, $pivotField: PivotFieldInput!) {
    setPivotField(categoryId: $categoryId, pivotField: $pivotField) {
      actionInfo {
        hasError,
        message
      },
      category {
        id,
        pivotField {
          id,
          emptyErrorMessage,
          helperText,
          attribute {
            id,
            name
          },
          options {
            id,
            label,
            desc,
            isDefault
          }
        }
      }
    }
  }
`

const Reset = (environment, variables, callback) => {
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
            const payload = res.setPivotField
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default Reset
