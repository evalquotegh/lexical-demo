import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { EditorState } from "lexical";
import { useState } from "react";

import "./Editor.css";
import Placeholder from "./components/Placeholder";
import { config } from "./config";
import BoldPlugin from "./plugins/BoldPlugin";
import ItalicPlugin from "./plugins/ItalicPlugin";
import MyOnChangePlugin from "./plugins/MyOnChangePlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";

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
      <BoldPlugin className="editor-bold">B</BoldPlugin>
      <ItalicPlugin className="editor-italic">I</ItalicPlugin>
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor" />}
        placeholder={<Placeholder />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <TreeViewPlugin />
      <MyOnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}

export default Editor;
