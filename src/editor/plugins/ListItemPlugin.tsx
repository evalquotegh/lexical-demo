import {
  INSERT_CHECK_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { LexicalCommand } from "lexical";

type ListItemType = "check" | "ordered" | "unordered";
type ListItemFormatProps = {
  command: ListItemType;
  icon: JSX.Element;
};
type ListItemPluginProps = {
  className?: string;
  commands?: ListItemFormatProps[];
};

export default function ListItemPlugin({
  className = "editor-whitespace",
  commands = [
    { command: "check", icon: <span>&#x2610;</span> },
    { command: "ordered", icon: <span>&#49;</span> },
    { command: "unordered", icon: <span>&#9900;</span> },
  ],
}: ListItemPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onListItemClick = (type: ListItemType): void => {
    const command: { [key: string]: LexicalCommand<void> } = {
      check: INSERT_CHECK_LIST_COMMAND,
      ordered: INSERT_ORDERED_LIST_COMMAND,
      unordered: INSERT_UNORDERED_LIST_COMMAND,
    };

    editor.dispatchCommand(command[type], undefined);
  };

  return (
    <div className={className}>
      {commands.map(({ command, icon }: ListItemFormatProps, index: number) => (
        <button onClick={() => onListItemClick(command)} key={index}>
          {icon}
        </button>
      ))}
    </div>
  );
}
