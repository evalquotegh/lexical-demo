import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";

import { FormatTextCommands, FormatTextPlugin } from "../FormatTextPlugin";
import SeparatorPlugin from "../SeparatorPlugin";
import UndoRedoPlugin, { UndoRedoTypes } from "../UndoRedoPlugin";

export default function ToolbarPlugin(): JSX.Element {
  return (
    <>
      {UndoRedoTypes.map((type, i) => (
        <UndoRedoPlugin type={type} key={i} />
      ))}
      {FormatTextCommands.map((command, i) => (
        <FormatTextPlugin command={command} key={i} />
      ))}
      <SeparatorPlugin />

      <HistoryPlugin />
      <HorizontalRulePlugin />
    </>
  );
}
