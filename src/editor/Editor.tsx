import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { EditorState } from "lexical";
import { useState } from "react";

import "./Editor.css";
import Placeholder from "./components/Placeholder";
import { config } from "./config";
import { MyOnChangePlugin } from "./plugins/MyOnChangePlugin";

function Editor() {
  const [_, setEditorState] = useState({});
  function onChange(editorState: EditorState): void {
    const editorStateJSON = editorState.toJSON();
    // setEditorState(editorState);  // non-serialized
    setEditorState(editorStateJSON); // serialized (JSON)

    console.clear();
    console.log(_);
  }

  return (
    <LexicalComposer initialConfig={config}>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <MyOnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
}

export default Editor;