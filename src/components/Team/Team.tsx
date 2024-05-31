import React from "react";
import "./Team.css";
import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import man1 from "../../assets/images/man1.webp";
import man2 from "../../assets/images/man5.webp";
import man3 from "../../assets/images/man3.jpg";
function Team() {
  return (
    <div className="team">
      <HeadingTitle
        title="Meet our team"
        description="Get to know the faces behind the scenes and learn about the values that drive us."
      />
      <div className="container">
        <div className="card">
          <div className="image">
          <img src={man1} alt="" />
          </div>
          <div className="info">
            <p className="h-xs name">John M.</p>
            <p className="b-m job">UX Designer @Brello</p>
          </div>
          <hr />
          <div className="social-icons">
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </div>
        </div>
        <div className="card">
          <div className="image">
          <img src={man2} alt="" />
          </div>
          <div className="info">
            <p className="h-xs name">Michael L.</p>
            <p className="b-m job">Creative Director @Yo</p>
          </div>
          <hr />
          <div className="social-icons">
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </div>
        </div>
        <div className="card">
          <div className="image">
          <img src={man3} alt="" />
          </div>
          <div className="info">
            <p className="h-xs name">Sam K.</p>
            <p className="b-m job">UI Designer @Boo</p>
          </div>
          <hr />
          <div className="social-icons">
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
