import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Button from '../../../Components/Button'
import Link from '../../../Components/Link'
import useAppContext from '../../../hooks/useAppContext'
import FAQDetailPage from './FAQDetailPage'

const Component = props => {
  const { queryParams } = useAppContext()
  const { posts, me } = props

  const question = queryParams.question ? parseInt(queryParams.question, 10) : null

  if(typeof question === 'number') {
    return (
      <FAQDetailPage post={posts[question]} me={me}/>
    )
  }
  
  return (
    <div>
      <div>
        <List
        >
          {posts.map((post, i) => {
            if(post.isDeleted) return null
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

      <Button
        link
        href='/admin/new/faq'
        label="Add"
      >
      </Button>
    </div>
  )
}

export default createFragmentContainer(Component, {
  posts: graphql`
    fragment FAQPage_posts on Post @relay(plural: true) {
      id,
      title,
      content,
      isDeleted
    }
  `,
  me: graphql`
    fragment FAQPage_me on User {
      id,
      isAdmin,
      ...FAQDetailPage_me
    }
  `
})