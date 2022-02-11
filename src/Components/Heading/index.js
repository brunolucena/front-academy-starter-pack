import "./styles.css";

function Heading({ children, color = "#ffffff", fontSize = 22, fontWeight = 500 }) {
  return <div style={{ color, fontSize, fontWeight }}>{children}</div>;
}

export default Heading;
