import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = props => {
  return (
    <div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  store: graphql`
    fragment EditStoreScreen_store on Store {
      id,
      name,
      whatsappNumber,
      profilePicture {
        id,
        url
      },
      banner {
        id,
        url
      },
      address {
        fullAddress
      }
    }
  `
})