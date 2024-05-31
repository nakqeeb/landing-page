import React from "react";
import "./HighlightedCTA.css";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import mobile from "../../assets/images/MobileMockup1.svg";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

function HighlightedCTA() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="highlightedcta">
      <div className="container">
        <div className="box">
          <div className="info">
            <p className={`${width <= 992 && width > 767 ? 'h-m' : width <= 767 ? 'h-s' : 'h-l'}`}>Get Landing Page UI Kit Today!</p>
            <p className={`${width <= 992 && width > 767 ? 'b-m' : width <= 767 ? 'b-m' : 'b-l'}`}>
              Break the Figma limits and explore the endless possibilities with
              Anima.
            </p>
            <CustomButton
              className="h-xxs get-started-btn"
              name="Get Started"
              children={
                <FontAwesomeIcon
                  style={{ marginLeft: "10px" }}
                  icon={faArrowRight}
                />
              }
              ischildrenLeft={false}
            />
          </div>
          <div className="graphics">
            <img src={mobile} alt="" />
            <div className="circle-regular"></div>
            <div className="circle-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightedCTA;
