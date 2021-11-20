import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { HEADER_HEIGHT, HEADER_BORDER_BOTTOM_COLOR } from '../../Constants'
import BackButton from '../../Components/BackButton'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Link from '../../Components/Link'
import useAppContext from '../../hooks/useAppContext'
import FAQPage from './Desktop/FAQPage'

const Component = props => {
  const { posts, me, history } = props
  const { queryParams, isMobile } = useAppContext()

  const i = queryParams.question ? parseInt(queryParams.question) : null

  const handleContentClick = (e) => {
    if(e.target?.nodeName === 'A') {
      const { host, href } = e.target
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
      <FAQPage posts={posts} me={me}/>
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
          }}>FAQ</h1>
        </div>
      </div>
      {typeof i === 'number' ?
      <div 
        onClick={handleContentClick}
        style={{
          padding: '20px 15px'
        }}
      >
        <h4 style={{ margin: 0, marginBottom: 20 }}>{posts[i].title}</h4>
        <div
          dangerouslySetInnerHTML={{ __html: posts[i].content }} 
        >
          
        </div>
      </div>
      :
      <div>
        <List
        >
          {posts.map((post, i) => {
            return (
              <ListItem
                component={Link}
                button
                href={`/faq?question=${i}`}
                key={post.id}
              >
                <ListItemText primary={post.title} />
              </ListItem>
            )
          })}
        </List>
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  posts: graphql`
    fragment FAQScreen_posts on Post @relay(plural: true) {
      id,
      title,
      content,
      ...FAQPage_posts
    }
  `,
  me: graphql`
    fragment FAQScreen_me on User {
      id,
      isAdmin,
      ...FAQPage_me
    }
  `
})