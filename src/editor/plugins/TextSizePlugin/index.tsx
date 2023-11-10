import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createHeadingNode, HeadingTagType } from "@lexical/rich-text";
import { $setBlocksType } from "@lexical/selection";
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  ElementNode,
} from "lexical";
import { SetStateAction, useEffect, useState } from "react";

type TextSizeType = HeadingTagType | "p";
type TextSizeOptionProps = {
  label: string;
  value: TextSizeType;
};
type TextSizePluginProps = {
  className?: string;
  options?: TextSizeOptionProps[];
};

export default function TextSizePlugin({
  className = "editor-text-size",
  options = [],
}: TextSizePluginProps): JSX.Element {
  const PARAGRAPH = "p";
  const [option, setOption] = useState(PARAGRAPH);
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        $setBlocksType(
          selection,
          (): ElementNode =>
            option === PARAGRAPH
              ? $createParagraphNode()
              : $createHeadingNode(option as HeadingTagType)
        );
      }
    });
  }, [editor, option]);

  return (
    <select
      className={className}
      value={option}
      onChange={({ target: { value } }) =>
        setOption(value as SetStateAction<string>)
      }
    >
      {options.map((o, i) => (
        <option value={o.value} key={i}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
