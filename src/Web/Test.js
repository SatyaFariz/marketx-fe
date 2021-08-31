import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { useState } from 'react'
import { TextField } from '@material-ui/core'
import CreatePost from '../mutations/CreatePost'
import createRelay from '../Mobile/createRelay'

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
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onChange}
        />
      </div>

      <button onClick={save}>Save</button>
    </div>
  )
}

export default Component