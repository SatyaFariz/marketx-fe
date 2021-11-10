import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateCategoryMutation($input: UpdateCategoryInput!) {
    updateCategory(input: $input) {
      actionInfo {
        hasError,
        message
      },
      category {
        id,
        name,
        isPublished,
        showsProductConditionField,
        requiresProductCondition,
        listingType,
        ancestors {
          id,
          name
        },
        icon {
          url
        },
        specFields {
          type,
          isRequired,
          isEnum,
          isMulti,
          suffix,
          prefix,
          isAutocomplete,
          options,
          max,
          min,
          numberOfLines,
          maxLength,
          attribute {
            id,
            name
          }
        }
      }
    }
  }
`

const UpdateCategory = (environment, variables, file, callback) => {
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
            const payload = res.updateCategory
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateCategory
