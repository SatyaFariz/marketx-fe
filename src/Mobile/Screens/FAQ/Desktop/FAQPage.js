import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Button from '../../../Components/Button'

const Component = props => {
  const { posts } = props
  return (
    <div>
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
      content
    }
  `,
  me: graphql`
    fragment FAQPage_me on User {
      id,
      isAdmin
    }
  `
})