import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";

import ClearFormatPlugin from "../ClearFormatPlugin";
import {
  FormatElementPlugin,
  FormatElementTypes,
} from "../FormatElementPlugin";
import { FormatTextPlugin, FormatTextTypes } from "../FormatTextPlugin";
import IndentOutdentPlugin, {
  IndentOutdentTypes,
} from "../IndentOutdentPlugin";
import SeparatorPlugin from "../SeparatorPlugin";
import UndoRedoPlugin, { UndoRedoTypes } from "../UndoRedoPlugin";

export default function ToolbarPlugin(): JSX.Element {
  return (
    <>
      {UndoRedoTypes.map((type, i) => (
        <UndoRedoPlugin type={type} key={i} />
      ))}
      {FormatTextTypes.map((type, i) => (
        <FormatTextPlugin type={type} key={i} />
      ))}
      {FormatElementTypes.map((type, i) => (
        <FormatElementPlugin type={type} key={i} />
      ))}
      {IndentOutdentTypes.map((type, i) => (
        <IndentOutdentPlugin type={type} key={i} />
      ))}
      <ClearFormatPlugin />

      <SeparatorPlugin />
      <HistoryPlugin />
      <HorizontalRulePlugin />
    </>
  );
}
