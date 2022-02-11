import CenterContent from "./CenterContent";
import Text from "../../Components/Text";
import Logo from "../../Components/Logo";
import "./styles.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-container__content">
        <div>top</div>

        <CenterContent />

        <div className="home-container__content__bottom">
          <Text color="#ffffff">Powered by</Text>

          <div className="logo-container">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
