import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { useCallback } from "react";

export type ClearFormatPluginProps = {
  className?: string;
  children?: string | JSX.Element;
};

export default function ClearFormatPlugin({
  className = "editor-clear-format",
  children = "C",
}: ClearFormatPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();

  const onClearFormatClick = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        selection.getNodes().forEach((node) => {
          if ($isTextNode(node)) {
            node.setFormat(0);
            node.setStyle("");
          }
        });
      }
      editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
    });
  }, [editor]);

  return (
    <button className={className} onClick={onClearFormatClick}>
      {children}
    </button>
  );
}
