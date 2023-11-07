import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $createLineBreakNode,
  $createTextNode,
  $getSelection,
  $insertNodes,
  LexicalEditor,
} from "lexical";

type HorizontalRulePluginProps = {
  className?: string;
  children?: string;
  title?: string;
  onClick?: () => void;
};

const defaultProps = {
  className: "editor-horizontal-rule",
  children: "—",
  title: "Horizontal Rule",
  onClick: () => undefined,
};

function HorizontalRuleComponent({
  className = defaultProps.className,
  children = defaultProps.children,
  title = defaultProps.title,
  onClick = defaultProps.onClick,
}: HorizontalRulePluginProps): JSX.Element {
  return (
    <button className={className} title={title} onClick={onClick}>
      {children}
    </button>
  );
}

function useHorizontalRuleComponent(
  editor: LexicalEditor,
  props: HorizontalRulePluginProps = defaultProps
): JSX.Element {
  const onHorizontalRuleClick = () => {
    editor.update(() => {
      const textNode = $createTextNode("---");
      const lineBreakNode = $createLineBreakNode();
      const nodes = [textNode, lineBreakNode];
      const selection = $getSelection();

      if (selection?.getTextContent()) {
        selection.insertNodes(nodes);
      } else {
        $insertNodes(nodes);
      }
    });
  };

  return <HorizontalRuleComponent {...props} onClick={onHorizontalRuleClick} />;
}

function HorizontalRulePLugin(
  props: HorizontalRulePluginProps = defaultProps
): JSX.Element {
  const [editor] = useLexicalComposerContext();
  return useHorizontalRuleComponent(editor, props);
}

export default HorizontalRulePLugin;
