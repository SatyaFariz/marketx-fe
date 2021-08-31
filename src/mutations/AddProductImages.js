import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation AddProductImagesMutation($id: String!) {
    addProductImages(id: $id) {
      actionInfo {
        hasError,
        message
      },
      product {
        id,
        images {
          id,
          url,
          display
        }
      }
    }
  }
`

const AddProductImages = (environment, variables, files, callback) => {
  const uploadables = {}
  for(let i = 0; i < files.length; i++) {
    uploadables[`file_${i}`] = files[i]
  }
  
  commitMutation(
    environment,
    {
      mutation,
      uploadables,
      variables,
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.addProductImages
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default AddProductImages
