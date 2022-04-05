import Card from "../../../Components/Card";
import FrontAcademy from "./assets/frontacademy.png";
import Heading from "../../../Components/Heading";
import Project from "../../../Components/Project";
import useIsMobile from "../../../helpers/useIsMobile";

import "./styles.css";

function LastProjects() {
  const isMobile = useIsMobile({ mobileSize: 472 });

  return (
    <Card paddingBottom={0}>
      <div className="last-projects-container">
        <div className="last-projects__header">
          <Heading fontSize={isMobile ? 20 : 24}>Últimos projetos</Heading>
          <Heading color="#6A6A6A" fontSize={16}>
            VER TODOS
          </Heading>
        </div>

        <div className="last-projects__wrapper">
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
      </div>
    </Card>
  );
}

export default LastProjects;
