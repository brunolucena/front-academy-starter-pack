import Logo from "../Logo";
import Button from "../Button";
import "./styles.css";

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu">
        <div>
          <Logo />
          Teste
        </div>

        <div className="links-container">
          <Button>StarterPack</Button>
          <Button>Evolution</Button>
          <Button>Especialist</Button>
        </div>

        <div className="right">
          <Button>Entrar</Button>

          <Button backgroundColor="#0289ea" borderRadius={8}>
            Começar
          </Button>
        </div>
      </div>
    </div>
  );
} 

export default Menu;
