import React from "react";
import "./CircledIcon.css";

const CircledIcon = props => {
  const { idx, name, icon, description,col,bgColor } = props;

  return (
    <div className={`${col ? col: 'col-md-5 offset-md-1'}`} >
      <span></span>
      <div className="service">
        <div className={`primary-circle ${bgColor ? bgColor : ""}`}>{icon}</div>
        <h5>
          <li>{name}</li>
          {description && <p className="service-des-txt">{description}</p>}
        </h5>
      </div>
    </div>
  );
};

export default CircledIcon;
