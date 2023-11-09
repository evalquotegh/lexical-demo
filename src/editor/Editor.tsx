import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

import "./Editor.css";
import Placeholder from "./components/Placeholder";
import { config } from "./config";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import TreeViewPlugin from "./plugins/TreeViewPlugin";

function Editor() {
  return (
    <LexicalComposer initialConfig={config}>
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={<ContentEditable className="editor" />}
        placeholder={<Placeholder />}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <TreeViewPlugin />
    </LexicalComposer>
  );
}

export default Editor;
