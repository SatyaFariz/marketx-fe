import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import Button from '../../../Components/Button'
import { TextField } from '@material-ui/core'
import useAppContext from '../../../hooks/useAppContext'
import { EditorState, convertToRaw } from 'draft-js'
import PublishPost from '../../../../mutations/PublishPost'
import DeletePost from '../../../../mutations/DeletePost'
import { stateFromHTML } from 'draft-js-import-html'
import draftToHtml from 'draftjs-to-html'
import { useRef, useEffect, useState, lazy, Suspense } from 'react'
import { NoSsr } from '@material-ui/core'

const Editor = lazy(() => import('react-draft-wysiwyg').then(module => ({ default: module.Editor })))

const Component = props => {
  const isMounted = useRef(true)
  const { queryParams, history } = useAppContext()
  const { post, me, relay: { environment }} = props
  const isEditing = queryParams.edit === '1' && me?.isAdmin
  const [title, setTitle] = useState(post?.title || '')
  const [loading, setLoading] = useState(false)
  const [editorState, setEditorState] = useState(post ? EditorState.createWithContent(stateFromHTML(post.content)) : EditorState.createEmpty())
  const onChange = state => setEditorState(state)

  const saveEdit = () => {
    if(!loading && title.trim().length > 0) {
      const variables = {
        id: post.id,
        title,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      }
      PublishPost(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          history.goBack()
        }

        isMounted.current && setLoading(false)
      })

      setLoading(true)
    }
  }

  const deletePost = () => {
    if(!loading) {
      const variables = {
        id: post.id
      }
      DeletePost(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          history.replace('/faq')
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

  if(isEditing) {
    return (
      <div>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value.trimLeft())}
          fullWidth
          style={{ marginBottom: 20 }}
        />
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
          <button onClick={deletePost}>Delete</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>
        {post.content}
      </div>
      <Button
        label="Edit"
        onClick={() => history.push(`/faq?question=${queryParams.question}&edit=1`)}
      />
    </div>
  )
}

export default createFragmentContainer(Component, {
  me: graphql`
    fragment FAQDetailPage_me on User {
      id,
      isAdmin
    }
  `
})