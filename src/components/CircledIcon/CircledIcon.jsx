import React from "react";
import "./CircledIcon.css";

const CircledIcon = props => {
  const { idx, name, icon, description } = props;

  return (
    <div className="col-md-5 offset-md-1" >
      <span></span>
      <div className="service">
        <div className="primary-circle">{icon}</div>
        <h5>
          <li>{name}</li>
          {description && <p className="service-des-txt">{description}</p>}
        </h5>
      </div>
    </div>
  );
};

export default CircledIcon;
