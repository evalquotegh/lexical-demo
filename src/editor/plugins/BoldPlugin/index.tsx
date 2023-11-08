import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import "./index.css";

type BoldPluginProps = {
  className?: string;
  children?: string | JSX.Element;
};

function BoldPlugin({ className, children }: BoldPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onBoldClick = () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
  return (
    <button className={className} onClick={onBoldClick}>
      {children}
    </button>
  );
}

export default BoldPlugin;
