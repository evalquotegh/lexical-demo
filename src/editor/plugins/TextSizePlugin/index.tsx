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

export function TextSizePlugin(): JSX.Element {
  const options: TextSizeOptionProps[] = [
    { label: "Title", value: "h1" },
    { label: "Heading", value: "h2" },
    { label: "Subheading", value: "h3" },
    { label: "Body", value: "p" },
  ];

  const BODY = options[3].value;
  const [option, setOption] = useState(BODY);
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        $setBlocksType(
          selection,
          (): ElementNode =>
            option === BODY
              ? $createParagraphNode()
              : $createHeadingNode(option as HeadingTagType)
        );
      }
    });
  }, [editor, option, BODY]);

  return (
    <select
      value={option}
      onChange={({ target: { value } }) =>
        setOption(value as SetStateAction<TextSizeType>)
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
