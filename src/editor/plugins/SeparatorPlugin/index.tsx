import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";

export type SeparatorPluginProps = {
  className?: string;
  children?: string | JSX.Element;
};

export function SeparatorPlugin({
  className = "editor-separator",
  children = "—",
}: SeparatorPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();

  const onSeparatorClick = () =>
    editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
  return (
    <button className={className} onClick={onSeparatorClick}>
      {children}
    </button>
  );
}
