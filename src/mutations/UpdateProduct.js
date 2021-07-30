import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation UpdateProductMutation($id: String!, $input: ProductInput!) {
    updateProduct(id: $id, input: $input) {
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

const UpdateProduct = (environment, variables, callback) => {
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
            const payload = res.updateProduct
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default UpdateProduct
