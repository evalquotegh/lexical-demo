type PlaceholderProps = {
  className?: string;
  style?: { [key: string]: string };
  children?: string | JSX.Element;
};

const placeholderStyles = {
  color: "blueviolet",
};

function Placeholder({
  className = "editor-placeholder",
  style = placeholderStyles,
  children = "Enter some text...",
}: PlaceholderProps): JSX.Element {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}

export default Placeholder;
