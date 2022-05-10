import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "../Landing/Landing";
import "./BlogDetails.css";

const BlogDetails = () => {
  let { src } = useParams();
  const [blogDetails, setBlogDetails] = useState();

  useEffect(() => {
    const blogDetailsObj = cards?.find(card => (card.params = src));
    setBlogDetails(blogDetailsObj);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {blogDetails?.summary && <p>{blogDetails.summary}</p>}
        </div>
        <div className="col-md-6">
          <div>
            <img src={`./imgs/${src}.png`} className="img-fluid" alt="img" />
          </div>
        </div>
        {blogDetails?.details &&
          blogDetails?.details.map(details => (
            <React.Fragment>
              <div className="col-md-12">
                <h3>{details.title}</h3>
              </div>
              <div className="col-md-12">
                <p>{details.description}</p>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default BlogDetails;
