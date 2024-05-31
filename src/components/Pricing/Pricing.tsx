import React from "react";
import "./Pricing.css";
import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../shared/components/UIElements/CustomButton";

function Pricing() {
  return (
    <div className="pricing">
      <HeadingTitle
        title="Pick Your Perfect Plan"
        description="Find the perfect plan for your business with our flexible pricing options."
      />
      <div className="container">
        <div className="card">
          <p className="b-l type">Free</p>
          <p className="h-l price">
            $0 <span className="h-xxs">/ month</span>
          </p>
          <p className="b-m description">
            Best for Small Teams or Individuals.
          </p>
          <ul>
            <li>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon className="true-icon" icon={faCheck} />
                </span>
                Write feature details here
              </p>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon className="true-icon" icon={faCheck} />
                </span>
                Write feature details here
              </p>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon className="true-icon" icon={faCheck} />
                </span>
                Write feature details here
              </p>
            </li>
          </ul>

          <CustomButton
            className="h-xxs get-started-btn"
            style={{ backgroundColor: "#E5F4F2", color: "#009379" }}
            name="Get Started"
          />
        </div>
        <div className="card">
          <p className="b-l type">Professional</p>
          <p className="h-l price">
            $19 <span className="h-xxs">/ month</span>
          </p>
          <p className="b-m description">Ideal for Growing Companies.</p>
          <ul>
            <li>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon className="true-icon" icon={faCheck} />
                </span>
                Write feature details here
              </p>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon className="true-icon" icon={faCheck} />
                </span>
                Write feature details here
              </p>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon className="true-icon" icon={faCheck} />
                </span>
                Write feature details here
              </p>
            </li>
          </ul>

          <CustomButton
            className="h-xxs get-started-btn"
            style={{ backgroundColor: "#E5F4F2", color: "#009379" }}
            name="Get Started"
          />
        </div>
        <div
          className="card"
          style={{ backgroundColor: "#009379", color: "#ffffff" }}
        >
          <p className="b-l type">Enterprise</p>
          <p className="h-l price">
            $49 <span className="h-xxs">/ month</span>
          </p>
          <p className="b-m description">Ultimate for Enterprise Solutions.</p>
          <ul>
            <li>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon
                    className="true-icon"
                    style={{ color: "#ffffff" }}
                    icon={faCheck}
                  />
                </span>
                Write feature details here
              </p>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon
                    className="true-icon"
                    style={{ color: "#ffffff" }}
                    icon={faCheck}
                  />
                </span>
                Write feature details here
              </p>
              <p className="h-xxs">
                <span>
                  <FontAwesomeIcon
                    className="true-icon"
                    style={{ color: "#ffffff" }}
                    icon={faCheck}
                  />
                </span>
                Write feature details here
              </p>
            </li>
          </ul>

          <CustomButton
            className="h-xxs get-started-btn"
            style={{ backgroundColor: "#ffffff", color: "#009379" }}
            name="Get Started"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
