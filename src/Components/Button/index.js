import './styles.css';

function Button(props) {
  const children = props.children;
  const backgroundColor = props.backgroundColor;
  const borderRadius = props.borderRadius;

  return (
    <button
      className="button-container"
      style={{
        backgroundColor,
        borderRadius,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
