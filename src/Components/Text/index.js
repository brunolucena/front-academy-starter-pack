import "./styles.css";

function Text({
  children,
  color = '#ffffff',
  fontSize,
}) {
  return <div style={{ color, fontSize }}>{children}</div>;
}

export default Text;
