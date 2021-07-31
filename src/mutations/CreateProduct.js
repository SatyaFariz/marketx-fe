import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation CreateProductMutation($storeId: String!, $type: ProductTypeEnum!, $categoryId: String, $input: ProductInput!) {
    createProduct(storeId: $storeId, type: $type, categoryId: $categoryId, input: $input) {
      actionInfo {
        hasError,
        message
      },
      product {
        id,
        name,
        desc,
        price,
        images {
          id,
          url
        },
        category {
          id,
          name
        },
        rentalDuration {
          display
        },
        specs {
          id,
          attribute {
            id,
            name,
            icon {
              id,
              url
            }
          },
          value
        },
        merchant {
          id,
          name,
          profilePicture {
            id,
            url
          }
        },
        store {
          id,
          name,
          whatsappLink
        }
      }
    }
  }
`

const CreateProduct = (environment, variables, files, callback) => {
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
            const payload = res.createProduct
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default CreateProduct
