import React from "react";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import {  items, Partner } from "../Landing/Landing";
// import Carousel from "react-elastic-carousel";

const About = () => {
  const team = [
    {
      name: "Tareq",
      title: "Founder-Senior Sofware Engineer",
      src: "./imgs/founder.png",
      linkedIn: "",
      preview:
        "Tareq has passion for developing technology-based solutions that deliver real improvements to business, the environment and quality of life",
    },
    {
      name: "Amaia",
      title: "Content Manager",
      src: "./imgs/card-img.png",
      linkedIn: "",
      preview:
        "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
    },
    {
      name: "Matteo",
      title: "Senior Front-End Developer",
      src: "./imgs/card-img.png",
      linkedIn: "",
      preview:
        "Cybersecurity Student, passion for IoT systems and security flaws. ",
    },
    {
      name: "Flori",
      title: "Senior Hardware Engineer",
      src: "./imgs/hardware-eng.png",
      linkedIn: "",
      preview:
        "Passionate on latest hardware technologies since the age of fourteen.",
    },
  ];

  return (
    <>
      <section className="landing">
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="f-end">
                  <img src="/imgs/about-us.png" alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="hero-content h-100 ">
                  <h1>Engaging New Audiences Through Smart Approach</h1>
                  <div className="separator"></div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p>
                    Nullam quis ante. Etiam sit amet orci eget eros faucibus
                    tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                    Donec sodales sagittis magna. Sed consequat, leo eget
                    bibendum sodales, augue velit cursus nunc.Donec vitae sapien
                    ut libero venenatis faucibus tempus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="team-section light-blue-bg">
        <div className="container">
          <div className="partners-header">
            <h1>Our Awesome Team</h1>
            <div className="separator"></div>
            <br />
            <p>
              We celebrate our successes and look forward to new opportunities.
              Collaboration is key challenges and having fun at the same time,
              we’re built upon this way.{" "}
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            {team.map(({ name, src, title, linkedIn, preview }) => (
              <div className="col-lg-3 col-md-6 col-12 mb-2" key={name}>
                <div className="card">
                  <img src={src} className="card-img-top" alt="..." />
                  <div className="card-body team-card">
                    <h3>{name}</h3>
                    <span>{title}</span>
                    <div className="card-icons">
                      <Linkedin />
                    </div>
                    <p className="text-center">
                      Risus commodo viverra maecenas accumsan lacus vel
                      facilisis quis ipsum.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ux */}
      <section className="ux">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12">
              <div className="partners-header text-center">
                <h1>We always try to understand users expectation</h1>
                <div className="separator"></div>
                <br />
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="text-center mb-2">
                <h2>180K</h2>
                <p>Downloaded</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="text-center mb-2">
                <h2>20K</h2>
                <p>Feedback</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="text-center mb-2">
                <h2>500+</h2>
                <p>Users</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="text-center mb-2">
                <h2>70+</h2>
                <p>Contributors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact-section */}
      <section className="contact-section">
        <div className="light-blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div>
                  <img
                    src="./imgs/idea.png"
                    alt="idea-img"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="h-100 f-center">
                  <div className="contact-content text-center">
                    <h1>Talk to us about your idea! </h1>
                    <br />
                    <h3>
                      To find out more about IOTON, or to discuss how we may be
                      of service to you, please get in touch.
                    </h3>
                    <p>
                      Unlock the potential of pioneering IoT technology for your
                      business.
                    </p>
                    <div>
                      <button className="custom-btn">contact us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* partners-section */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-header">
            <h1>Our Partners</h1>
            <div className="separator"></div>
          </div>
          <br />
          <br />
          <div className="partner-carousel">
            {/* <Carousel breakPoints={breakPoints} className="blue-bg-carousel">
              {items.map(item => (
                <Partner key={item.name} name={item.name} src={item.src} />
              ))}
            </Carousel> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
