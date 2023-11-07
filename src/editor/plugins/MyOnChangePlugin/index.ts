import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import { useEffect } from "react";

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

export default MyOnChangePlugin;
