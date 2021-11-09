import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

const Component = ({ children }) => {
  return (
    <div style={{
      height: '100%',
      width: '100%',
      position: 'fixed',
      left: 0,
      right: 0,
      overflow: 'hidden'
    }}>
      
      <div style={{
        height: '100%',
        overflow: 'hidden auto',
      }}>
        {children}
      </div>
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment FixedAddressBar_me on User {
      id,
      isAdmin
    }
  `
})