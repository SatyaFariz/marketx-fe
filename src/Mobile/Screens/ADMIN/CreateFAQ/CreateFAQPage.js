import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { useState, lazy, Suspense } from 'react'
import { TextField, NoSsr } from '@material-ui/core'
import CreatePost from '../../../../mutations/CreatePost'
import useAppContext from '../../../hooks/useAppContext'

const Editor = lazy(() => import('react-draft-wysiwyg').then(module => ({ default: module.Editor })))

const Component = props => {
  const { environment, history } = useAppContext()
  const [title, setTitle] = useState('')
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [loading, setLoading] = useState(false)
  const onChange = state => setEditorState(state)

  const save = () => {
    if(title.trim() !== '' && !loading) {
      const variables = {
        type: 'faq',
        title,
        isPublished: true,
        content: draftToHtml(convertToRaw(editorState.getCurrentContent()))
      }

      CreatePost(environment, variables, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          const { hasError, message } = payload.actionInfo
          alert(message)
          if(!hasError) {
            history.push('/faq')
          }
        }
      })
      setLoading(true)
    }
  }
  return (
    <div style={{
      padding: 20
    }}>
      <TextField
        label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{ marginBottom: 20 }}
      />

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
  )
}

export default Component