import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_ELEMENT_COMMAND } from "lexical";
import "./index.css";

export const FormatElementTypes = ["left", "center", "right", "justify"];
export type FormatElementType =
  | (typeof FormatElementTypes)[0]
  | (typeof FormatElementTypes)[1]
  | (typeof FormatElementTypes)[2]
  | (typeof FormatElementTypes)[3];
export type FormatElementPluginProps = {
  type: FormatElementType;
  className?: string;
  children?: string | JSX.Element;
};

export function FormatElementPlugin({
  type,
  className,
  children,
}: FormatElementPluginProps): JSX.Element {
  if (!className) {
    className = `editor-${type}`;
  }

  if (!children) {
    switch (type) {
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
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, type);
  return (
    <button className={className} onClick={onFormatElementClick}>
      <strong>{children}</strong>
    </button>
  );
}
