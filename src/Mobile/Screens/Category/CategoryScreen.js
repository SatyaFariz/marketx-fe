import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = props => {
  return (
    <div>

    </div>
  )
}

export default createFragmentContainer(Component, {
  category: graphql`
    fragment CategoryScreen_category on Category {
      id,
      name
    }
  `
})