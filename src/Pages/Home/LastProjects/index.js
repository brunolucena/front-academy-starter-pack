import Card from "../../../Components/Card";
import FrontAcademy from "./assets/frontacademy.png";
import Heading from "../../../Components/Heading";
import Project from "../../../Components/Project";

import "./styles.css";

function LastProjects() {
  return (
    <Card>
      <div className="last-projects-container">
        <div className="last-projects__header">
          <Heading fontSize={24}>Últimos projetos</Heading>
          <Heading color="#6A6A6A" fontSize={16}>
            VER TODOS
          </Heading>
        </div>

        <div className="last-projects__content">
          <Project
            imageUrl={FrontAcademy}
            link="https://github.com/brunolucena/front-academy"
            title="Front Academy"
          />
          <Project
            imageUrl={FrontAcademy}
            link="https://github.com/brunolucena/front-academy"
            title="Front Academy"
          />
          <Project
            imageUrl={FrontAcademy}
            link="https://github.com/brunolucena/front-academy"
            title="Front Academy"
          />
          <Project
            imageUrl={FrontAcademy}
            link="https://github.com/brunolucena/front-academy"
            title="Front Academy"
          />
        </div>
      </div>
    </Card>
  );
}

export default LastProjects;
