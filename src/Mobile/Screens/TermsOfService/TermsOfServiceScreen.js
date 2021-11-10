import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import moment from 'moment'
import useAppContext from '../../hooks/useAppContext'
import TermsOfServicePage from './Desktop/TermsOfServicePage'

const Component = props => {
  const { isMobile, history } = useAppContext()
  const { posts, me } = props
  const post = posts[0]

  const handleContentClick = (e) => {
    if(e.target?.parentElement?.nodeName === 'A') {
      const { host, href } = e.target.parentElement
      if(host === window.location.host) {
        const reg = /.+?\:\/\/.+?(\/.+?)?(?:#|\?|)?$/
        const pathname = reg.exec(href)[1] || '/'
        e.preventDefault()
        history.push(pathname)
      }
    }
  }

  if(!isMobile) {
    return (
      <TermsOfServicePage posts={posts} me={me}/>
    )
  }

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

      <div 
        onClick={handleContentClick}
        style={{
          padding: '20px 15px'
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: post.content }} 
        >
        </div>
        <p style={{
          textAlign: 'right',
          fontSize: 14,
          marginTop: 20
        }}>Terakhir di-update: {moment(new Date(post.updatedAt)).format('DD MMMM YYYY')}</p>
      </div>
      
    </div>
  )
}

export default createFragmentContainer(Component, {
  posts: graphql`
    fragment TermsOfServiceScreen_posts on Post @relay(plural: true) {
      id,
      title,
      content,
      updatedAt,
      ...TermsOfServicePage_posts
    }
  `,
  me: graphql`
    fragment TermsOfServiceScreen_me on User {
      id,
      ...TermsOfServicePage_me
    }
  `
})