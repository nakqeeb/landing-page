import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.svg";
import rocket from "../../assets/images/RocketLaunch.svg";
import CustomButton from "../../shared/components/UIElements/CustomButton";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <p className="h-xs">
            Landing<span className="b-l">Page</span>
          </p>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <CustomButton
                className="h-xxs btn contact-btn"
                style={{
                  backgroundColor: "#F8F9FF",
                  color: "#009379",
                  width: "100px",
                }}
                name="Contact"
              />
            </li>
            <li>
              <CustomButton
                className="h-xxs btn how-works-btn"
                style={{ backgroundColor: "#E5F4F2", color: "#009379" }}
                name="How it works"
              />
            </li>
            <li>
              <CustomButton
                className="h-xxs btn get-started-btn"
                name="Get Started"
                children={<img src={rocket} alt="" width={16} height={16} />}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
