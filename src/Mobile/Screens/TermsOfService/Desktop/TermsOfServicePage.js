import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { useRef, useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import CreatePost from '../../../../mutations/CreatePost'

const Component = props => {
  const isMounted = useRef(true)
  const [loading, setLoading] = useState(false)
  const [created, setCreated] = useState(false)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onChange = state => setEditorState(state)
  const { posts, me, relay: { environment }} = props
  const post = posts[0]

  const save = () => {
    if(!loading && !created) {
      const variables = {
        title: 'Ketentuan Layanan', 
        type: 'terms_of_service', 
        isPublished: true,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      }
      CreatePost(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          isMounted.current && setCreated(true)
          alert('created')
        }

        isMounted.current && setLoading(false)
      })

      setLoading(true)
    }
  }

  useEffect(() => {
    return () => isMounted.current = false
  }, [])

  return (
    <div>
      {!post ? 
      <div>
        {me?.isAdmin ?
          <div>
            <div style={{
              padding: 20
            }}>

              <div>
                <Editor
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={onChange}
                />
              </div>

              <button onClick={save}>Save</button>
            </div>
          </div>
          :
          <div>
            Belum ada Ketentuan Layanan
          </div>
        }
      </div>
      :
      <div>
        {post.content}
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  posts: graphql`
    fragment TermsOfServicePage_posts on Post @relay(plural: true) {
      id,
      title,
      content,
      updatedAt
    }
  `,
  me: graphql`
    fragment TermsOfServicePage_me on User {
      id,
      isAdmin
    }
  `
})