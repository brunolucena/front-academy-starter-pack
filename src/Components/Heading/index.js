import "./styles.css";

function Heading({ children, color = "#ffffff", fontFamily, fontSize = 22, fontWeight = 500 }) {
  return <div style={{ color, fontFamily, fontSize, fontWeight }}>{children}</div>;
}

export default Heading;
