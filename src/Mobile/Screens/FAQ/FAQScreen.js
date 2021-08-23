import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = props => {
  return (
    <div>

    </div>
  )
}

export default createFragmentContainer(Component, {
  posts: graphql`
    fragment FAQScreen_posts on Post @relay(plural: true) {
      id,
      title,
      content
    }
  `
})