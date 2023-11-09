import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalCommand, REDO_COMMAND, UNDO_COMMAND } from "lexical";

export const UndoRedoTypes = ["undo", "redo"];
export type UndoRedoType =
  | (typeof UndoRedoTypes)[0]
  | (typeof UndoRedoTypes)[1];
export type UndoRedoPluginProps = {
  type: UndoRedoType;
  className?: string;
  children?: string | JSX.Element;
};

export default function UndoRedoPlugin({
  type,
  className,
  children,
}: UndoRedoPluginProps): JSX.Element {
  let command: LexicalCommand<void>;

  if (!className) {
    className = `editor-${type}`;
  }

  if (!children) {
    switch (type) {
      case "undo":
        command = UNDO_COMMAND;
        children = "↺";
        break;
      case "redo":
        command = REDO_COMMAND;
        children = "↻";
        break;
    }
  }

  const [editor] = useLexicalComposerContext();
  const onUndoRedoClick = () => editor.dispatchCommand(command, undefined);

  return (
    <button className={className} onClick={onUndoRedoClick}>
      {children}
    </button>
  );
}
