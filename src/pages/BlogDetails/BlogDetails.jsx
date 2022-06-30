import React, {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {Helmet} from "react-helmet";
import {cards} from "../Landing/Landing";

import "./BlogDetails.css";

const BlogDetails = () => {
    let {src} = useParams();
    const location = useLocation()
    const [blogDetails, setBlogDetails] = useState({});

    useEffect(() => {
        const blogDetailsObj = cards?.find(card => card.params === src);
        setBlogDetails(blogDetailsObj);
        console.log(blogDetailsObj);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{"IOTON Blog- " + blogDetails.title}</title>
                {/*Search Engine Friendly Metadata*/}
                <meta name="author" content="IOTON Team"/>
                <meta name="keywords"
                      content={blogDetails.tags}/>
                <meta name="description"
                      content={blogDetails.highlights}/>
                <meta name="title"
                      content={blogDetails.title}/>
                <meta name="ticker" content=""/>
                <meta name="DC.date.issued" content="6/30/2022"/>
                {/*Twitter Cards*/}
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="IOTON Blog"/>
                <meta name="twitter:title"
                      content={blogDetails.title}/>
                <meta name="twitter:description"
                      content={blogDetails.highlights}/>
                {/* Open Graph */}
                <meta property="og:title"
                      content={blogDetails.title}/>
                <meta property="og:type" content="article"/>
                <meta name="twitter:image"
                      content={"https://"+window.location.hostname+blogDetails.src}/>
                <meta property="og:image"
                      content={"https://"+window.location.hostname+blogDetails.src}/>
                <meta property="og:url"
                      content={"https://"+window.location.hostname+location.pathname}/>
                <meta property="og:description"
                      content={blogDetails.highlights}/>
                {/* <meta property="og:article:published_time" content="6/30/2022 1:55:27 PM"/> */}
                <meta property="og:article:author " content="IOTON Blog"/>
                <meta property="og:article:tag"
                      content={blogDetails.tags}/>
                <meta property="og:locale" content="en_UK"/>
                <meta property="og:site_name" content="IOTON Blog"/>
            </Helmet>
            <div className="pt-3 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="f-center flex-column align-items-start h-100">
                                {blogDetails?.title && <h2>{blogDetails.title}</h2>}
                                {blogDetails?.summary && <p>{blogDetails.summary}</p>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="f-end">
                                <img src={`./imgs/${src}.png`} className="img-fluid" alt="img"/>
                            </div>
                        </div>
                    </div>

                    {blogDetails?.details &&
                        blogDetails?.details.map(details => (
                            <div className="row" key={details.title}>
                                <div className="col-md-12">
                                    <h3 className="blog">{details.title}</h3>
                                </div>
                                <div className="col-md-12">
                                    <p className="blog">{details.description}</p>
                                </div>
                            </div>
                        ))}

                    {blogDetails?.detailedDescription &&
                        blogDetails.detailedDescription.map(item => (
                            <div className="row" key={item}>
                                <div className="col-md-6">
                                    <div className="f-center h-100">
                                        <p className="blog">{item.description}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="f-end">
                                        <img src={item.imgSrc} alt="img" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default BlogDetails;
