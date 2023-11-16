import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";

export type DividerPluginProps = {
  className?: string;
  icon?: JSX.Element;
};

export function DividerPlugin({
  className = "editor-divider",
  icon = <span>&mdash;</span>,
}: DividerPluginProps): JSX.Element {
  const [editor] = useLexicalComposerContext();

  const onDividerClick = () =>
    editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined);
  return (
    <button className={className} onClick={onDividerClick}>
      {icon}
    </button>
  );
}
