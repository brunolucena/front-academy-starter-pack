import CSS3 from "./assets/CSS3.png";
import Card from "../../../Components/Card";
import Git from "./assets/Git.png";
import HTML5 from "./assets/HTML5.png";
import Heading from "../../../Components/Heading";
import JavaScript from "./assets/JavaScript.png";
import ReactImage from "./assets/React.png";
import useIsMobile from "../../../helpers/useIsMobile";

import "./styles.css";

function Technologies() {
  const isMobile = useIsMobile({ mobileSize: 472 });

  return (
    <Card>
      <div className="techonologies-container">
        <div className="techonologies__header">
          <Heading fontSize={isMobile ? 20 : 24}>
            Tecnologias e frameworks
          </Heading>
        </div>

        <div className="techonologies__content">
          <img alt="HTML5" src={HTML5} width={isMobile ? 32 : 49} />
          <img alt="CSS3" src={CSS3} width={isMobile ? 32 : 49} />
          <img alt="JavaScript" src={JavaScript} width={isMobile ? 26 : 43} />
          <img alt="React" src={ReactImage} width={isMobile ? 80 : 110} />
          <img alt="Git" src={Git} width={isMobile ? 30 : 40} />
        </div>
      </div>
    </Card>
  );
}

export default Technologies;
