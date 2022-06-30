import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cards } from "../Landing/Landing";
import "./BlogList.css";
import Card from "../../components/Card/Card";
import Blog1Image from "../../pages/BlogList/images/WelcomeToIotonBlogImage.png"
import Blog2Image from "../../pages/BlogList/images/WhatIsIotBlogImage.png"
import Blog3Image from "../../pages/BlogList/images/TheImpactOfIotBlogImage.png"

const BlogList = () => {
  let { src } = useParams();
  const [BlogList, setBlogList] = useState({});

  useEffect(() => {
    const BlogListObj = cards?.find(card => card.params === src);
    setBlogList(BlogListObj);
    console.log(BlogListObj);
  }, []);

  return (
    // Card("florijan", "image", "flori", "flori")
    <div>
      <div className="blog-content-in ">
        <br/>
        <h2 className="blog-list">Discover More</h2>
        <h7 className="blog-list">Follow our blog to find out more about the lastest updates in the industry, IoT’s and all things related to IOTON.</h7>
        <br/>      
      </div>
      <div className="row" style={{marginLeft: "17%", marginRight: "17%"}}>
      <Card date={"March 15, 2022"}  title={"Welcome To IOTON"} owner={"Amaia"} src={Blog1Image} params={"Welcome to IOTON, an innovative tech start-app that automates existing procedures through technology solutions, starting from the catering industry, medical, road traffic control..."} linkto={"industry"}/> 
      <Card date={"March 15, 2022"}  title={"What is the Internet of things?"} owner={"Amaia"} src={Blog2Image} params={"IoT, also known as internet of things, is the connectivity of computing devices incorporated in ordinary things through the Internet so that they may transmit and receive data..."} linkto={"IOT"}/>
      <Card date={"March 15, 2022"}  title={"The Importance of IOT in industry"} owner={"Amaia"} src={Blog3Image} params={"The Internet of Things is already present and growing in popularity. IoT’s refer to Internet-connected devices such as smartwatches, Fitbit, or refrigerator..."} linkto={"electric"}/>
      </div>
      <br/>
  </div>
  );
};

export default BlogList;
