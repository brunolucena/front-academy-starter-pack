import Card from "../../../Components/Card";
import Certificate from "../../../Components/Certificate";
import Heading from "../../../Components/Heading";
import StarterPack from "./assets/starter-pack.svg";

import "./styles.css";

function Certificates() {
  return (
    <Card>
      <div className="certificates-container">
        <div className="certificates__header">
          <Heading fontSize={24}>Certificados</Heading>
          <Heading color="#6A6A6A" fontSize={16}>
            VER TODOS
          </Heading>
        </div>

        <div className="certificates__content">
          <Certificate
            authenticationCode="Autenticação #1929292a1ka191922k1921929aaj"
            imageUrl={StarterPack}
            link="https://github.com/brunolucena/front-academy-starter-pack"
            title="STARTER PACK"
            subTitle="Front Academy, 2022"
          />
        </div>
      </div>
    </Card>
  );
}

export default Certificates;
