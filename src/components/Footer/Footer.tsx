import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p className="b-s">© 2023 Anima’s Landing Page Ui Kit. </p>
        <div className="social-icons">
          <FontAwesomeIcon className="social-icon" icon={faYoutube} />
          <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
