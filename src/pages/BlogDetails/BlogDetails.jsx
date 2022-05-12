import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "../Landing/Landing";
import "./BlogDetails.css";

const BlogDetails = () => {
  let { src } = useParams();
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    const blogDetailsObj = cards?.find(card => card.params === src);
    setBlogDetails(blogDetailsObj);
    console.log(blogDetailsObj);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="f-center h-100">
            {blogDetails?.summary && <p>{blogDetails.summary}</p>}
          </div>
        </div>
        <div className="col-md-6">
          <div className="f-end">
            <img src={`./imgs/${src}.png`} className="img-fluid" alt="img" />
          </div>
        </div>
        {blogDetails?.details &&
          blogDetails?.details.map(details => (
            <div className="row" key={details.title}>
              <div className="col-md-12">
                <h3>{details.title}</h3>
              </div>
              <div className="col-md-12">
                <p>{details.description}</p>
              </div>
            </div>
          ))}

        {blogDetails?.detailedDescription &&
          blogDetails.detailedDescription.map(item => (
            <div className="row" key={item}>
              <div className="col-md-6">
                <div className="f-center h-100">
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="f-end">
                  <img src={item.imgSrc} alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogDetails;
