import CSS3 from './assets/CSS3.png';
import Card from "../../../Components/Card";
import Git from './assets/Git.png';
import HTML5 from './assets/HTML5.png';
import Heading from "../../../Components/Heading";
import JavaScript from './assets/JavaScript.png';
import ReactImage from './assets/React.png';

import "./styles.css";

function Technologies() {
  return (
    <Card>
      <div className="techonologies-container">
        <div className="techonologies__header">
          <Heading fontSize={24}>Tecnologias e frameworks</Heading>
        </div>

        <div className="techonologies__content">
          <img alt="HTML5" src={HTML5} width={49} />
          <img alt="CSS3" src={CSS3} width={49} />
          <img alt="JavaScript" src={JavaScript} width={43} />
          <img alt="React" src={ReactImage} width={110} />
          <img alt="Git" src={Git} width={40} />
        </div>
      </div>
    </Card>
  );
}

export default Technologies;
