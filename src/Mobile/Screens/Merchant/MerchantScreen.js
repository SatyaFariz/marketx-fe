import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = props => {
  return (
    <div>

    </div>
  )
}

export default createFragmentContainer(Component, {
  merchant: graphql`
    fragment MerchantScreen_merchant on User {
      id,
      name,
      profilePicture {
        id,
        url
      }
    }
  ` 
})