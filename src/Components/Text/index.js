import "./styles.css";

function Text({ children, color = '#ffffff' }) {
  return <div style={{ color }}>{children}</div>;
}

export default Text;
