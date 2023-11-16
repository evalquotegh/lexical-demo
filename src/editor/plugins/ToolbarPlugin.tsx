import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";

import ClearFormatPlugin from "./ClearFormatPlugin";
import FormatElementPlugin from "./FormatElementPlugin";
import FormatTextPlugin from "./FormatTextPlugin";

import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { DividerPlugin } from "./DividerPlugin";
import ListItemPlugin from "./ListItemPlugin";
import RevertChangePlugin from "./RevertChangePlugin";
import TextSizePlugin from "./TextSizePlugin";
import WhitespacePlugin from "./WhitespacePlugin";

export default function ToolbarPlugin(): JSX.Element {
  return (
    <div className="editor-toolbar">
      <TextSizePlugin />
      <RevertChangePlugin />
      <FormatTextPlugin />
      <ListItemPlugin />
      <FormatElementPlugin />
      <WhitespacePlugin />
      <ClearFormatPlugin />
      <DividerPlugin />

      <HistoryPlugin />
      <CheckListPlugin />
      <ListPlugin />
      <HorizontalRulePlugin />
    </div>
  );
}
