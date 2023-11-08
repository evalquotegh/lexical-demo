import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import "./index.css";

type ItalicPluginProps = {
  className?: string;
  children?: string | JSX.Element;
};

function ItalicPlugin({ className, children }: ItalicPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onItalicClick = () =>
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
  return (
    <button className={className} onClick={onItalicClick}>
      <em>{children}</em>
    </button>
  );
}

export default ItalicPlugin;
