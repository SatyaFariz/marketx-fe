import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const mutation = graphql`
  mutation CreatePostMutation($title: String!, $content: String!, $isPublished: Boolean!, $type: String!) {
    createPost(title: $title, content: $content, isPublished: $isPublished, type: $type) {
      actionInfo {
        hasError,
        message
      },
      post {
        id,
        type,
        content
      }
    }
  }
`

const CreatePost = (environment, variables, callback) => {
  commitMutation(
    environment,
    {
      mutation,
      variables,
      updater: (store) => {
        const payload = store.getRootField('createPost', variables)
        const post = payload?.getLinkedRecord('post')
      
        const filter = { type: variables.type }
        const root = store.getRoot()
        const posts = root.getLinkedRecords('posts', filter)
        
        if(posts)
          root.setLinkedRecords([...posts, post], 'posts', filter)
      },
      onCompleted: (res, err) => {
        if(typeof callback === 'function') {
          if(err)
            callback(null, err)
          else {
            const payload = res.createPost
            callback(payload, null)
          }
        }
      },
      onError: err => console.log(err),
    }
  )
}

export default CreatePost
