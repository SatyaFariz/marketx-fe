import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { useState } from 'react'
import { TextField } from '@material-ui/core'
import CreatePost from '../../../../mutations/CreatePost'
import createRelay from '../../../createRelay'

const environment = createRelay()

const Component = props => {
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
          alert(payload)
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