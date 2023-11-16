import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalCommand, REDO_COMMAND, UNDO_COMMAND } from "lexical";

type RevertChangeType = "undo" | "redo";
type RevertChangeFormatProps = {
  command: RevertChangeType;
  icon: JSX.Element;
};
type RevertChangePluginProps = {
  className?: string;
  commands?: RevertChangeFormatProps[];
};

export default function RevertChangePlugin({
  className = "editor-whitespace",
  commands = [
    { command: "undo", icon: <span>&#8634;</span> },
    { command: "redo", icon: <span>&#8635;</span> },
  ],
}: RevertChangePluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onRevertChangeClick = (type: RevertChangeType): void => {
    const command: { [key: string]: LexicalCommand<void> } = {
      undo: UNDO_COMMAND,
      redo: REDO_COMMAND,
    };

    editor.dispatchCommand(command[type], undefined);
  };

  return (
    <div className={className}>
      {commands.map(
        ({ command, icon }: RevertChangeFormatProps, index: number) => (
          <button onClick={() => onRevertChangeClick(command)} key={index}>
            {icon}
          </button>
        )
      )}
    </div>
  );
}
