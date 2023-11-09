import { FormatTextCommands, FormatTextPlugin } from "../FormatTextPlugin";

export default function ToolbarPlugin(): JSX.Element {
  return (
    <>
      {FormatTextCommands.map((command, i) => (
        <FormatTextPlugin command={command} key={i} />
      ))}
    </>
  );
}
