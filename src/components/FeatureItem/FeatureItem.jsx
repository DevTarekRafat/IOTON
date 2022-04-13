import React from "react";
import "./FeatureItem.css";

export const FeatureItem = ({ imgSrc, imgName, title, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <div className="feature-container">
        <div className="feature ">
          <div>
            <img src={imgSrc} alt={imgName} className="img-fluid" />
          </div>
          <h3>
            {title} <br />
            {imgName === "feature4" ? "Computer Vision" : "IoT"} <br />
            {imgName !== "feature4" && "Solutions"}
          </h3>

          <p>{description}</p>
          <button className="explore-btn">explore more</button>
        </div>
      </div>
    </div>
  );
};
