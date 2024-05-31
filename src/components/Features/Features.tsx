import React from "react";
import "./Features.css";
import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCode,
  faMagicWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { faObjectUngroup } from "@fortawesome/free-regular-svg-icons";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

function Features() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="features">
      <HeadingTitle
        title="Features"
        description="These are just a few features you’ll get using Anima Landing Page Ui Kit."
      />
      <div className="container">
        <div className="card">
          <div className="upper">
            <div
              className="icon"
              style={{ backgroundColor: "rgb(255 98 80 / 20%)" }}
            >
              <FontAwesomeIcon
                className="font-icon"
                style={{ color: "#FF6250" }}
                icon={faMagicWandSparkles}
              />
            </div>
            <p
              className={`${
                width <= 992 && width > 767 ? "h-xs" : "h-s"
              } title`}
            >
              Fast building
            </p>
            <p className="b-m description">
              Tailor Anima's Landing Page UI Kit to your unique style and brand
              with customisable components, in no time!
            </p>
          </div>
          <div className="down">
            <a href="#" className="h-xxs learn-more">
              Learn More{" "}
              <FontAwesomeIcon
                className="learn-more-icon"
                icon={faArrowRight}
              />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <div
              className="icon"
              style={{ backgroundColor: "rgb(0 147 121 / 20%)" }}
            >
              <FontAwesomeIcon
                className="font-icon"
                style={{ color: "#009379" }}
                icon={faObjectUngroup}
              />
            </div>
            <p
              className={`${
                width <= 992 && width > 767 ? "h-xs" : "h-s"
              } title`}
            >
              Responsive Design
            </p>
            <p className="b-m description">
              No need to worry about screen size. Anima's Landing Page UI Kit
              adapts to any screen size, from desktop to mobile.
            </p>
          </div>

          <div className="down">
            <a href="#" className="h-xxs learn-more">
              Learn More{" "}
              <FontAwesomeIcon
                className="learn-more-icon"
                icon={faArrowRight}
              />
            </a>
          </div>
        </div>
        <div className="card">
          <div className="upper">
            <div
              className="icon"
              style={{ backgroundColor: "rgb(248 213 126 / 20%)" }}
            >
              <FontAwesomeIcon
                className="font-icon"
                style={{ color: "#F8D57E" }}
                icon={faCode}
              />
            </div>
            <p
              className={`${
                width <= 992 && width > 767 ? "h-xs" : "h-s"
              } title`}
            >
              No Code Needed
            </p>
            <p className="b-m description">
              Zero coding skills required, Anima's Landing Page UI Kit empowers
              you to create stunning landing pages with ease.
            </p>
          </div>
          <div className="down">
            <a href="#" className="h-xxs learn-more">
              Learn More{" "}
              <FontAwesomeIcon
                className="learn-more-icon"
                icon={faArrowRight}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
