import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import { useState } from 'react'
const Component = props => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onChange = state => setEditorState(state)
  return (
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
      <div style={{
        marginTop: 20
      }}>
        {draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      </div>
    </div>
  )
}

export default Component