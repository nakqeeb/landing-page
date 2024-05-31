import React from "react";
import "./Highlighted.css";
import mobile from "../../assets/images/MobileMockup2.svg";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

function Highlighted() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="highlighted">
      <div className="container">
        <div className="draw">
        <div className="graphics">
          <div className="bg-circle">
            <img src={mobile} alt="" />
          </div>

          <div className="circle-regular"></div>
          <div className="circle-dot"></div>
        </div>
        </div>
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
      </div>
    </div>
  );
}

export default Highlighted;
