import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode";
import { HeadingNode } from "@lexical/rich-text";
import { ThemeProps, theme } from "./theme";
import { ErrorProps, onError } from "./utils/onError";

export type ConfigProps = {
  namespace: string;
  theme: ThemeProps;
  onError: (error: ErrorProps) => void;
  nodes: any[];
};

export const config: ConfigProps = {
  namespace: "MyEditor",
  theme,
  onError,
  nodes: [HeadingNode, HorizontalRuleNode],
};
