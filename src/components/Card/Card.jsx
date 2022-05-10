import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, owner, src,params }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-2">
      <div className="blog">
        <div className="blog-img-container">
          <img className="img-fluid" src={src} alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {owner && (
            <p className="card-text">
              <span className="fw-bold">By </span>
              <span>{owner}</span>
            </p>
          )}

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
          <div className="fg-between">
            <Link to={`/blogs/${params}`} className="read-more-btn">
              Read More
            </Link>
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
