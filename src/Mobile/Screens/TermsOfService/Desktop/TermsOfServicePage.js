import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import { useRef, useEffect, useState, lazy, Suspense } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import { stateFromHTML } from 'draft-js-import-html'
import draftToHtml from 'draftjs-to-html'
import CreatePost from '../../../../mutations/CreatePost'
import PublishPost from '../../../../mutations/PublishPost'
import useAppContext from '../../../hooks/useAppContext'
import { NoSsr } from '@material-ui/core'

const Editor = lazy(() => import('react-draft-wysiwyg').then(module => ({ default: module.Editor })))

const Component = props => {
  const { history, queryParams } = useAppContext()
  const { posts, me, relay: { environment }} = props
  const post = posts[0]
  const isMounted = useRef(true)
  const isEditing = queryParams.edit === '1' && me?.isAdmin
  const [loading, setLoading] = useState(false)
  const [created, setCreated] = useState(false)
  const [editorState, setEditorState] = useState(post ? EditorState.createWithContent(stateFromHTML(post.content)) : EditorState.createEmpty())
  const onChange = state => setEditorState(state)

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
          history.replace('/terms-of-service')
        }

        isMounted.current && setLoading(false)
      })

      setLoading(true)
    }
  }

  useEffect(() => {
    import('react-draft-wysiwyg/dist/react-draft-wysiwyg.css')
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
                <NoSsr>
                  <Suspense fallback={null}>
                    <Editor
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      onEditorStateChange={onChange}
                    />
                  </Suspense>
                </NoSsr>
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
        {isEditing ?
        <div>
          <div style={{
            padding: 20
          }}>

            <div>
              <NoSsr>
                <Suspense fallback={null}>
                  <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={onChange}
                  />
                </Suspense>
              </NoSsr>
            </div>

            <button onClick={saveEdit}>Save</button>
          </div>
        </div>
        :
        <div>
          <div>
          {post.content}
          </div>
          <button onClick={() => history.replace('/terms-of-service?edit=1')}>
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