import "./index.css";

type PlaceholderProps = {
  className?: string;
  children?: string;
};

function Placeholder({
  className = "editor-placeholder",
  children = "Enter some text...",
}: PlaceholderProps): JSX.Element {
  return <p className={className}>{children}</p>;
}

export default Placeholder;
