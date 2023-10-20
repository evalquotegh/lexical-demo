import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import "./App.css";

type KeyVal = { [key: string]: string };
type Theme = { [key: string]: string | KeyVal };
const theme: Theme = {};

function onError(error: Error): void {
  console.error(error);
}

type Config = {
  namespace: string;
  theme: Theme;
  onError: (error: Error) => void;
};

function App() {
  const initialConfig: Config = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  type PlaceholderProps = {
    className: string;
    children: string;
  };

  function Placeholder({ className, children }: PlaceholderProps): JSX.Element {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className="content-editable-wrapper">
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable className="content-editable" />}
          placeholder={
            <Placeholder className="content-editable-placeholder">Enter some text...</Placeholder>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
      </LexicalComposer>
    </div>
  );
}

export default App;
