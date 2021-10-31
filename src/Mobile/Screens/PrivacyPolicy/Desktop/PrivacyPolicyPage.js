import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { useRef, useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js'
import { stateFromHTML } from 'draft-js-import-html'
import draftToHtml from 'draftjs-to-html'
import CreatePost from '../../../../mutations/CreatePost'
import PublishPost from '../../../../mutations/PublishPost'
import useAppContext from '../../../hooks/useAppContext'

const Component = props => {
  const { history, queryParams } = useAppContext()
  const isMounted = useRef(true)
  const { posts, me, relay: { environment }} = props
  const post = posts[0]
  const isEditing = queryParams.edit === '1' && me?.isAdmin
  const [loading, setLoading] = useState(false)
  const [created, setCreated] = useState(false)
  const [editorState, setEditorState] = useState(post? EditorState.createWithContent(stateFromHTML(post.content)) : EditorState.createEmpty())
  const onChange = state => setEditorState(state)
  

  const save = () => {
    if(!loading && !created) {
      const variables = {
        title: 'Kebijakan Privasi', 
        type: 'privacy_policy', 
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

  const saveEdit = () => {
    if(!loading) {
      const variables = {
        id: post.id,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      }
      PublishPost(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          history.replace('/privacy-policy')
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
            Belum ada Kebijakan Privasi
          </div>
        }
      </div>
      :
      <div>
        {isEditing ?
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

            <button onClick={saveEdit}>Save</button>
          </div>
        </div>
        :
        <div>
          <div>
          {post.content}
          </div>
          <button onClick={() => history.replace('/privacy-policy?edit=1')}>
            Edit
          </button>
        </div>
        }
      </div>
      }
    </div>
  )
}

export default createFragmentContainer(Component, {
  posts: graphql`
    fragment PrivacyPolicyPage_posts on Post @relay(plural: true) {
      id,
      title,
      content,
      updatedAt
    }
  `,
  me: graphql`
    fragment PrivacyPolicyPage_me on User {
      id,
      isAdmin
    }
  `
})