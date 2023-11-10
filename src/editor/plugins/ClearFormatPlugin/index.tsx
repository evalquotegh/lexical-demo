import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  $isTextNode,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { useCallback } from "react";

type ClearFormatPluginProps = {
  className?: string;
  label?: string | JSX.Element;
};

export default function ClearFormatPlugin({
  className = "editor-clear-format",
  label = "C",
}: ClearFormatPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();

  const onClearFormatClick = useCallback((): void => {
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
      {label}
    </button>
  );
}
