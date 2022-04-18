import React from "react";
import "./FeatureItem.css";

export const FeatureItem = ({ imgSrc, imgName, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <div className="feature-container">
        <div className="feature ">
          <div className="feature-img-container">
            <img src={imgSrc} alt={imgName} className="img-fluid" />
          </div>
          <h3>{title}</h3>

          <p>{description}</p>
          <button className="explore-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};
