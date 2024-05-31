import React from "react";
import "./Hero.css";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import rocket from "../../assets/images/RocketLaunch.svg";
import mobile from "../../assets/images/MobileMockup1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

function Hero() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="hero">
      <div className="container">
        <div className="info">
          <p className={`${width <= 767 ? "h-m" : "h-xl"} title`}>
            Create Engaging Landing Pages
          </p>
          <p className={`${width <= 767 ? "b-m" : "b-l"} desc`}>
            Build beautiful landing pages in record time with Anima’s Landing
            Page UI kit for Figma. No code required!
          </p>
          <ul>
            <li>
              <CustomButton
                className="h-xxs get-started-btn"
                name="Get Started"
                children={<img src={rocket} alt="" width={16} height={16} />}
              />
            </li>
            <li>
              <CustomButton
                className="h-xxs how-works-btn"
                name="How it works"
              />
            </li>
          </ul>
        </div>
        <div className="graphics">
          <div className="bg-circle">
            <img src={mobile} alt="" />
            <div className="circle-regular"></div>
            <div className="circle-dot"></div>
            <FontAwesomeIcon className="circle-star-1" icon={faStar} />
            <FontAwesomeIcon className="circle-star-2" icon={faStar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
