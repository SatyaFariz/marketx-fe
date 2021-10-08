import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = props => {
  return (
    <div>

    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment AttributesListScreen_me on User @relay {
      id,
      isAdmin
    }
  `
})