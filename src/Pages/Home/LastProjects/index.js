import CSS3 from './assets/CSS3.png';
import Card from "../../../Components/Card";
import Git from './assets/Git.png';
import HTML5 from './assets/HTML5.png';
import Heading from "../../../Components/Heading";
import JavaScript from './assets/JavaScript.png';
import Project from "../../../Components/Project";
import ReactImage from './assets/React.png';

import "./styles.css";

function LastProjects() {
  return (
    <Card>
      <div className="last-projects-container">
        <div className="last-projects__header">
          <Heading fontSize={24}>Últimos projetos</Heading>
          <Heading color="#6A6A6A" fontSize={16}>VER TODOS</Heading>
        </div>

        <div className="last-projects__content">
          <Project />
        </div>
      </div>
    </Card>
  );
}

export default LastProjects;
