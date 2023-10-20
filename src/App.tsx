import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { EditorState } from "lexical";
import { useEffect, useState } from "react";
import "./App.css";

type KeyValProps = { [key: string]: string };
type ThemeProps = { [key: string]: string | KeyValProps };
const theme: ThemeProps = {};

function onError(error: Error): void {
  console.error(error);
}

type ConfigProps = {
  namespace: string;
  theme: ThemeProps;
  onError: (error: Error) => void;
};

type OnChangeProps = (editorState: EditorState) => void;
type MyOnChangePluginProps = { onChange: OnChangeProps };
type RegisterUpdateListenerProps = { editorState: EditorState };
function MyOnChangePlugin({ onChange }: MyOnChangePluginProps): null {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(
      ({ editorState }: RegisterUpdateListenerProps) => {
        onChange(editorState);
      }
    );
  }, [onChange, editor]);

  return null;
}

function App() {
  const initialConfig: ConfigProps = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  type PlaceholderProps = {
    className: string;
    children: string;
  };

  function Placeholder({ className, children }: PlaceholderProps): JSX.Element {
    return <div className={className}>{children}</div>;
  }

  const [_, setEditorState] = useState({});
  function onChange(editorState: EditorState): void {
    const editorStateJSON = editorState.toJSON();
    // setEditorState(editorState);  // non-serialized
    setEditorState(editorStateJSON); // serialized (JSON)

    console.clear();
    console.log(_);
  }

  return (
    <div className="content-editable-wrapper">
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable className="content-editable" />}
          placeholder={
            <Placeholder className="content-editable-placeholder">
              Enter some text...
            </Placeholder>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <MyOnChangePlugin onChange={onChange} />
      </LexicalComposer>
    </div>
  );
}

export default App;
