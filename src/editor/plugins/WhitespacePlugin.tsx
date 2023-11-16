import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  INDENT_CONTENT_COMMAND,
  LexicalCommand,
  OUTDENT_CONTENT_COMMAND,
} from "lexical";

type WhitespaceType = "indent" | "outdent";
type WhitespaceFormatProps = {
  command: WhitespaceType;
  icon: JSX.Element;
};
type WhitespacePluginProps = {
  className?: string;
  commands?: WhitespaceFormatProps[];
};

export default function WhitespacePlugin({
  className = "editor-whitespace",
  commands = [
    { command: "indent", icon: <span>&gt;&gt;</span> },
    { command: "outdent", icon: <span>&lt;&lt;</span> },
  ],
}: WhitespacePluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const onWhitespaceClick = (type: WhitespaceType): void => {
    const command: { [key: string]: LexicalCommand<void> } = {
      indent: INDENT_CONTENT_COMMAND,
      outdent: OUTDENT_CONTENT_COMMAND,
    };

    editor.dispatchCommand(command[type], undefined);
  };

  return (
    <div className={className}>
      {commands.map(
        ({ command, icon }: WhitespaceFormatProps, index: number) => (
          <button onClick={() => onWhitespaceClick(command)} key={index}>
            {icon}
          </button>
        )
      )}
    </div>
  );
}
