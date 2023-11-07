import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import { useEffect } from "react";

export type OnChangeProps = (editorState: EditorState) => void;
export type MyOnChangePluginProps = { onChange: OnChangeProps };
export type RegisterUpdateListenerProps = { editorState: EditorState };

export function MyOnChangePlugin({ onChange }: MyOnChangePluginProps): null {
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
