import React from "react";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Landing.css";

const Landing = () => {
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
    </React.Fragment>
  );
};

export default Landing;
