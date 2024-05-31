import React from "react";
import "./Contact.css";
import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CustomButton from "../../shared/components/UIElements/CustomButton";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="box">
          <HeadingTitle
            className="head-title"
            title="Let’s get in touch!"
            description="Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support."
          />
          <div className="contact-form">
            <div className="contact-info">
              <div className="phone-email">
                <p className="b-m phone">
                  <FontAwesomeIcon
                    className="phone-email-icon"
                    icon={faPhoneVolume}
                  />{" "}
                  +012 345 6789
                </p>
                <p className="b-m email">
                  <FontAwesomeIcon
                    className="phone-email-icon"
                    icon={faEnvelope}
                  />{" "}
                  Hello@animaapp.com
                </p>
              </div>
              <div className="social">
                <p className="h-xs">Connect with us</p>
                <div className="social-icons">
                  <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                  <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
                  <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                  <FontAwesomeIcon className="social-icon" icon={faTelegram} />
                </div>
              </div>
            </div>
            <div className="form">
              <form action="#">
                <div className="input-field">
                  <FontAwesomeIcon className="input-icon" icon={faUser} />
                  <input type="text" placeholder="Full Name" />
                </div>

                <div className="input-field">
                  <FontAwesomeIcon className="input-icon" icon={faEnvelope} />
                  <input type="email" placeholder="Email" />
                </div>

                <CustomButton className="h-xxs submit-btn" name="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
