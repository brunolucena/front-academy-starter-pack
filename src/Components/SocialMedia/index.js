import CV from "./assets/cv.png";
import GitHub from "./assets/github.png";
import Gmail from "./assets/gmail.png";
import Linkedin from "./assets/linkedin.png";
import MyCV from "./assets/Bruno_Lucena-Resume.pdf";

import "./styles.css";

function SocialMedia() {
  return (
    <div className="social-media-container">
      <a
        href="https://github.com/brunolucena"
        target="_blank"
        className="social-media-item"
        rel="noreferrer"
      >
        <img alt="GitHub" src={GitHub} width={35} />
      </a>

      <a
        href="https://www.linkedin.com/in/bruno-lucena/"
        className="social-media-item"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Linkedin" src={Linkedin} width={28} />
      </a>

      <a
        href="mailto:bruno.lucenac@gmail.com"
        className="social-media-item"
      >
        <img alt="Gmail" src={Gmail} width={33} />
      </a>

      <a
        href={MyCV}
        className="social-media-item"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="CV" src={CV} width={27} />
      </a>
    </div>
  );
}

export default SocialMedia;
