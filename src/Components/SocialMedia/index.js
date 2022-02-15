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
        <img alt="GitHub" src={GitHub} />
      </a>

      <a
        href="https://www.linkedin.com/in/bruno-lucena/"
        className="social-media-item"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Linkedin" src={Linkedin} />
      </a>

      <a
        href="mailto:bruno.lucenac@gmail.com"
        className="social-media-item"
      >
        <img alt="Gmail" src={Gmail} />
      </a>

      <a
        href={MyCV}
        className="social-media-item"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="CV" src={CV} />
      </a>
    </div>
  );
}

export default SocialMedia;
