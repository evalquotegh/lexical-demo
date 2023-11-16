import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND, TextFormatType } from "lexical";

type FormatTextType =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "code"
  | "subscript"
  | "superscript";
type FormatTextFormatProps = {
  format: FormatTextType;
  icon: JSX.Element;
};
type FormatTextPluginProps = {
  className?: string;
  formats?: FormatTextFormatProps[];
};

export default function FormatTextPlugin({
  className = "editor-format-text",
  formats = [
    { format: "bold", icon: <strong>B</strong> },
    { format: "italic", icon: <em>I</em> },
    {
      format: "underline",
      icon: <span style={{ textDecoration: "underline" }}>U</span>,
    },
    {
      format: "strikethrough",
      icon: <span style={{ textDecoration: "line-through" }}>S</span>,
    },
    { format: "code", icon: <code>&lt;/&gt;</code> },
    { format: "superscript", icon: <sup>Aa</sup> },
    { format: "subscript", icon: <sub>Aa</sub> },
  ],
}: FormatTextPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onFormatTextClick = (type: TextFormatType): boolean =>
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);

  return (
    <div className={className}>
      {formats.map(
        (
          { format, icon }: FormatTextFormatProps,
          index: number
        ): JSX.Element => (
          <button onClick={() => onFormatTextClick(format)} key={index}>
            {icon}
          </button>
        )
      )}
    </div>
  );
}
