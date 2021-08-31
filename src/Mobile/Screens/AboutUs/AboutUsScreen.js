import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'

const Component = props => {
  const { posts } = props
  const post = posts[0]

  return (
    <div>
      <div style={{
        height: HEADER_HEIGHT,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        borderBottom: `1px solid ${HEADER_BORDER_BOTTOM_COLOR}`
      }}>
        <BackButton/>
        
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0
        }}>
          <h1 style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
          }}>{post.title}</h1>
        </div>
      </div>

      <div style={{
        padding: '20px 15px'
      }}>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }} 
        >
        </div>
      </div>
      
    </div>
  )
}

export default createFragmentContainer(Component, {
  posts: graphql`
    fragment AboutUsScreen_posts on Post @relay(plural: true) {
      id,
      title,
      content
    }
  `
})