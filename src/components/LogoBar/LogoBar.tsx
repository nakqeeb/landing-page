import React from "react";
import "./LogoBar.css";
import airbnb from "../../assets/images/airbnb.svg";
import google from "../../assets/images/google.svg";
import amazon from "../../assets/images/amazon.svg";
import microsoft from "../../assets/images/microsoft.svg";
import fedex from "../../assets/images/fedex.svg";
import hubspot from "../../assets/images/hubspot.svg";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

function LogoBar() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="logobar">
      <div className="container">
        <div className="logos">
          <img src={airbnb} width={width <= 767 ? 70 : 90} alt="" />
          <img src={google} width={width <= 767 ? 70 : 90} alt="" />
          <img src={amazon} width={width <= 767 ? 70 : 90} alt="" />
          <img src={microsoft} width={width <= 767 ? 70 : 90} alt="" />
          <img src={fedex} width={width <= 767 ? 70 : 90} alt="" />
          <img src={hubspot} width={width <= 767 ? 70 : 90} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LogoBar;
