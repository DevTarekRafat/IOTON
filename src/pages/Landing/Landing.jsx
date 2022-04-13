import React from "react";
import "./Landing.css";
import Carousel from "react-elastic-carousel";
import { FeatureItem } from "../../components/FeatureItem/FeatureItem";

const Landing = () => {
  const items = [
    { name: "logo1", src: "./imgs/partner.png" },
    { name: "logo2", src: "./imgs/partner.png" },
    { name: "logo3", src: "./imgs/partner.png" },
    { name: "logo4", src: "./imgs/partner.png" },
    { name: "logo5", src: "./imgs/partner.png" },
    { name: "logo6", src: "./imgs/partner.png" },
    { name: "logo7", src: "./imgs/partner.png" },
  ];

  const features = [
    {
      imgSrc: "./imgs/feature1.png",
      title: "Software Development",
      description:
        "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      imgName: "feature1",
    },
    {
      imgSrc: "./imgs/feature2.png",
      title: "Smart Home, Office",
      description:
        "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      imgName: "feature2",
    },
    {
      imgSrc: "./imgs/feature3.png",
      title: "Smart City",
      description:
        "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      imgName: "feature3",
    },
    {
      imgSrc: "./imgs/feature4.png",
      title: "AI and",
      description:
        "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      imgName: "feature4",
    },
    {
      imgSrc: "./imgs/feature5.png",
      title: "Industrial",
      description:
        "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      imgName: "feature5",
    },
    {
      imgSrc: "./imgs/feature6.png",
      title: "System on Chip",
      description:
        "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      imgName: "feature6",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
  ];

  return (
    <React.Fragment>
      <section className="landing">
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="hero-content">
                  <span className="internet-txt">Internet of Things</span>
                  <h1>
                    Save, Advance,
                    <br /> Succeed with us!
                  </h1>
                  <p>
                    We create highly-sophisticates software{" "}
                    <span className="primary-txt"> integrated systems</span>{" "}
                    through customized{" "}
                    <span className="primary-txt"> IOT devices</span> , process
                    datas with advanced algorithms and present these datas{" "}
                    <span className="primary-txt">simplified</span> through
                    customized through modern user friendly dashboard’s.
                  </p>
                  <button className="explore-btn">explore more</button>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="f-end">
                  <img src="/imgs/computing.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="partners-section">
        <div className="container">
          <div className="partners-header">
            <h1>Our Partners</h1>
            <div className="separator"></div>
          </div>
          <br />
          <div className="partner-carousel">
            <Carousel breakPoints={breakPoints} className="blue-bg-carousel">
              {items.map(item => (
                <Partner key={item.name} name={item.name} src={item.src} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="partners-header">
            <h1>Featured Services We Provide</h1>
            <div className="separator" style={{ width: "45%" }}></div>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
          </div>
          <div className="row">
            {features.map(feature => (
              <FeatureItem {...feature} key={feature.imgName} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
const Partner = ({ src, name }) => {
  return (
    <div>
      <img className="img-fluid" src={src} alt={name} />
    </div>
  );
};

export default Landing;
