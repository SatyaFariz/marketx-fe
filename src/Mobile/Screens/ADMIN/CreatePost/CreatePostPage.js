import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { useState, lazy, Suspense, useEffect } from 'react'
import { TextField, NoSsr } from '@material-ui/core'
import CreatePost from '../../../../mutations/CreatePost'
import createRelay from '../../../createRelay'

const Editor = lazy(() => import('react-draft-wysiwyg').then(module => ({ default: module.Editor })))

const environment = createRelay()

const Component = props => {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onChange = state => setEditorState(state)

  const save = () => {
    if(title.trim() !== '' && type.trim() !== '') {
      CreatePost(environment, { title, type, content: draftToHtml(convertToRaw(editorState.getCurrentContent())) }, (payload, error) => {
        if(error) {
          console.log(error)
        } else if(payload) {
          alert(payload)
        }
      })
    }
  }

  useEffect(() => {
    import('react-draft-wysiwyg/dist/react-draft-wysiwyg.css')
  }, [])
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

      <TextField
        label="Type"
        value={type}
        onChange={e => setType(e.target.value)}
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