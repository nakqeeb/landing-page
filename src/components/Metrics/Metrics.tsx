import React from "react";
import "./Metrics.css";
import HeadingTitle from "../../shared/components/HeadingTitle/heading-title";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
function Metrics() {
  const { height, width } = useWindowDimensions();
  return (
    <div className="metrics">
      <HeadingTitle
        title="Our Metrics Tell the Story"
        description="Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style."
      />
      <div className="container">
        <div className="card">
          <p className={`${width <= 992 ? "h-s" : "h-m"}`}>10k+</p>
          <p className="b-m">Website launched</p>
        </div>
        <div className="card">
          <p className={`${width <= 992 ? "h-s" : "h-m"}`}>931k+</p>
          <p className="b-m">Projects created with Anima</p>
        </div>
        <div className="card">
          <p className={`${width <= 992 ? "h-s" : "h-m"}`}>240k+</p>
          <p className="b-m">New users joined Anima</p>
        </div>
        <div className="card">
          <p className={`${width <= 992 ? "h-s" : "h-m"}`}>10k+</p>
          <p className="b-m">Teams used Anima</p>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
