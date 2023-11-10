import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  INDENT_CONTENT_COMMAND,
  LexicalCommand,
  OUTDENT_CONTENT_COMMAND,
} from "lexical";

export const IndentOutdentTypes = ["indent", "outdent"];
export type IndentOutdentType =
  | (typeof IndentOutdentTypes)[0]
  | (typeof IndentOutdentTypes)[1];
export type IndentOutdentPluginProps = {
  type: IndentOutdentType;
  className?: string;
  children?: string | JSX.Element;
};

export function IndentOutdentPlugin({
  type,
  className,
  children,
}: IndentOutdentPluginProps): JSX.Element {
  let command: LexicalCommand<void>;

  if (!className) {
    className = `editor-${type}`;
  }

  if (!children) {
    switch (type) {
      case "indent":
        command = INDENT_CONTENT_COMMAND;
        children = ">>";
        break;
      case "outdent":
        command = OUTDENT_CONTENT_COMMAND;
        children = "<<";
        break;
    }
  }

  const [editor] = useLexicalComposerContext();
  const onIndentOutdentClick = () => editor.dispatchCommand(command, undefined);

  return (
    <button className={className} onClick={onIndentOutdentClick}>
      {children}
    </button>
  );
}
