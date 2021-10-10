import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation CreateSpecificationFieldsMutation($categoryId: String!, $fields: [SpecificationFieldInput!]!) {
    createSpecificationFields(categoryId: $categoryId, fields: $fields) {
      actionInfo {
        hasError,
        message
      },
      category {
        id,
        specFields {
          type,
          isRequired,
          isEnum,
          isAutocomplete,
          options,
          max,
          min,
          attribute {
            id,
            name
          }
        }
      }
    }
  }
`

const CreateSpecificationFields = (environment, variables, file, callback) => {
  const uploadables = { file }
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
            const payload = res.createSpecificationFields
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default CreateSpecificationFields
