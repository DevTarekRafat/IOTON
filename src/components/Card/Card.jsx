import calendarIcon from "../../pages/BlogList/images/calendar.png"
import arrowButton from "../../pages/BlogList/images/arrowButton.png"
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Card = ({ date, title, owner, src, params, linkto}) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-2">
      <div className="blog">
        <div className="blog-img-container">
          <img className="img-fluid" src={src} alt={title} />
        </div>

        <div className="card-body">
          <div style={{ marginBottom: "10px"}}>
              <span style={{display: "inline"}}><img src={calendarIcon} alt="Calendar" style={{width: "auto"}}/></span>
              <span style={{display: "inline"}}> {date}</span>
          </div>
          <h5  className="card-title">{title}</h5>
          {owner && (
            <p className="card-text">
              <span className="fw-bold">By </span>
              <span>{owner}</span>
            </p>
          )}

          <p>
            {params}
          </p>
          <div className="fg-between">
            <div className="btn-format">
            <Link to={`/blogs/${linkto}`} className="read-more-btn">
              Read More
            </Link>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
