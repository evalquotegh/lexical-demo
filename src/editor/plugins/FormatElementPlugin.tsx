import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ElementFormatType, FORMAT_ELEMENT_COMMAND } from "lexical";

type FormatElementType = "left" | "center" | "right" | "justify";
type FormatElementFormatProps = {
  format: FormatElementType;
  icon: JSX.Element;
};
type FormatElementPluginProps = {
  className?: string;
  formats?: FormatElementFormatProps[];
};

export default function FormatElementPlugin({
  className = "editor-format-element",
  formats = [
    { format: "left", icon: <span>[-- ]</span> },
    { format: "center", icon: <span>[ - ]</span> },
    { format: "right", icon: <span>[ --]</span> },
    { format: "justify", icon: <span>[---]</span> },
  ],
}: FormatElementPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onFormatElementClick = (type: ElementFormatType): boolean =>
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, type);

  return (
    <div className={className}>
      {formats.map(
        (
          { format, icon }: FormatElementFormatProps,
          index: number
        ): JSX.Element => (
          <button onClick={() => onFormatElementClick(format)} key={index}>
            {icon}
          </button>
        )
      )}
    </div>
  );
}
