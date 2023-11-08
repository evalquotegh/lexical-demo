import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import "./index.css";

type FormatTextPluginProps = {
  command:
    | "bold"
    | "italic"
    | "underline"
    | "strikethrough"
    | "code"
    | "subscript"
    | "superscript";
  className?: string;
  children?: string | JSX.Element;
};

function FormatTextPlugin({
  command,
  className,
  children,
}: FormatTextPluginProps): JSX.Element {
  if (!className) {
    className = `editor-${command}`;
  }

  if (!children) {
    switch (command) {
      case "bold":
        children = <strong>B</strong>;
        break;
      case "italic":
        children = <em>I</em>;
        break;
      case "underline":
        children = <span className="underline">U</span>;
        break;
      case "strikethrough":
        children = <span className="strikethrough">S</span>;
        break;
      case "code":
        children = <code>&lt;/&gt;</code>;
        break;
      case "superscript":
        children = (
          <span className="superscript">
            A <sup>a</sup>
          </span>
        );
        break;
      case "subscript":
        children = (
          <span className="subscript">
            A <sub>a</sub>
          </span>
        );
        break;
    }
  }

  const [editor] = useLexicalComposerContext();
  const onFormatTextClick = () =>
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
  return (
    <button className={className} onClick={onFormatTextClick}>
      <strong>{children}</strong>
    </button>
  );
}

export default FormatTextPlugin;
