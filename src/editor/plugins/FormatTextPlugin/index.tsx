import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import "./index.css";

export const FormatTextCommands = [
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "code",
  "subscript",
  "superscript",
];
export type FormatTextCommand =
  | (typeof FormatTextCommands)[0]
  | (typeof FormatTextCommands)[1]
  | (typeof FormatTextCommands)[2]
  | (typeof FormatTextCommands)[3]
  | (typeof FormatTextCommands)[4]
  | (typeof FormatTextCommands)[5]
  | (typeof FormatTextCommands)[6];
export type FormatTextPluginProps = {
  command: FormatTextCommand;
  className?: string;
  children?: string | JSX.Element;
};

export function FormatTextPlugin({
  command,
  className,
  children,
}: FormatTextPluginProps): JSX.Element {
  console.log(command);
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
