import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_ELEMENT_COMMAND } from "lexical";
import "./index.css";

export const FormatElementCommands = ["left", "center", "right", "justify"];
export type FormatElementCommand =
  | (typeof FormatElementCommands)[0]
  | (typeof FormatElementCommands)[1]
  | (typeof FormatElementCommands)[2]
  | (typeof FormatElementCommands)[3];
export type FormatElementPluginProps = {
  command: FormatElementCommand;
  className?: string;
  children?: string | JSX.Element;
};

export function FormatElementPlugin({
  command,
  className,
  children,
}: FormatElementPluginProps): JSX.Element {
  if (!className) {
    className = `editor-${command}`;
  }

  if (!children) {
    switch (command) {
      case "left":
        children = <span>[- ]</span>;
        break;
      case "center":
        children = <span>[ - ]</span>;
        break;
      case "right":
        children = <span>[ -]</span>;
        break;
      case "justify":
        children = <span>[--]</span>;
        break;
    }
  }

  const [editor] = useLexicalComposerContext();
  const onFormatElementClick = () =>
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, command);
  return (
    <button className={className} onClick={onFormatElementClick}>
      <strong>{children}</strong>
    </button>
  );
}
