import Certificates from "../Certificates";
import LastProjects from "../LastProjects";
import Technologies from "../Technologies";
import UserProfile from "../UserProfile";

import "./styles.css";

function CenterContent() {
  return (
    <div className="center-content-container">
      <div className="center-content-container__left">
        <UserProfile />
      </div>

      <div className="center-content-container__right">
        <Technologies />
        <LastProjects />
        <Certificates />
      </div>
    </div>
  );
}

export default CenterContent;
