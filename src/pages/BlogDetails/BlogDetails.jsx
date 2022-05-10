import React from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";

const BlogDetails = () => {
  let { src } = useParams();
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div>
            <img src={`./imgs/${src}.png`} className="img-fluid" alt="img" />
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default BlogDetails;
