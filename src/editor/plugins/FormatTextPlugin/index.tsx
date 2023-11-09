import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import "./index.css";

export const FormatTextTypes = [
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "code",
  "subscript",
  "superscript",
];
export type FormatTextType =
  | (typeof FormatTextTypes)[0]
  | (typeof FormatTextTypes)[1]
  | (typeof FormatTextTypes)[2]
  | (typeof FormatTextTypes)[3]
  | (typeof FormatTextTypes)[4]
  | (typeof FormatTextTypes)[5]
  | (typeof FormatTextTypes)[6];
export type FormatTextPluginProps = {
  type: FormatTextType;
  className?: string;
  children?: string | JSX.Element;
};

export function FormatTextPlugin({
  type,
  className,
  children,
}: FormatTextPluginProps): JSX.Element {
  if (!className) {
    className = `editor-${type}`;
  }

  if (!children) {
    switch (type) {
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
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  return (
    <button className={className} onClick={onFormatTextClick}>
      <strong>{children}</strong>
    </button>
  );
}
