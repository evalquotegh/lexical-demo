import { FormatTextCommands, FormatTextPlugin } from "../FormatTextPlugin";
import SeparatorPlugin from "../SeparatorPlugin";

export default function ToolbarPlugin(): JSX.Element {
  return (
    <>
      {FormatTextCommands.map((command, i) => (
        <FormatTextPlugin command={command} key={i} />
      ))}
      <SeparatorPlugin />
    </>
  );
}
