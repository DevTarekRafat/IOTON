import React from "react";
import "./FeatureItem.css";

export const FeatureItem = ({ imgSrc, imgName, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <div className="feature-container">
        <div className="feature">
          <div className="feature-img-container">
            <img src={imgSrc} alt={imgName} className="img-fluid" />
            <div className="blue-circle"></div>
          </div>
          <h5>{title}</h5>

          <p>{description}</p>
          <a className="pointer">Read More</a>
        </div>
      </div>
    </div>
  );
};
