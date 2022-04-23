import React, { useEffect, useState } from "react";
import "./Landing.css";
import Carousel from "react-elastic-carousel";
import { FeatureItem } from "../../components/FeatureItem/FeatureItem";
import { ReactComponent as Facebook } from "../../icons/Facebook.svg";
import { ReactComponent as Twitter } from "../../icons/Twitter.svg";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import { ReactComponent as Gitlab } from "../../icons/Gitlab.svg";

const Landing = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    console.log("rendered");
  }, []);

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
      title: "Computer Vision and AI",
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

  const cards = [
    {
      title: "The Security Risks of Changing Package Owners",
      owner: "Admin",
      src: "./imgs/card-img.png",
    },
    {
      title: "Tips to Protecting Your Business and Family",
      owner: "Smith",
      src: "./imgs/card-img.png",
    },
    {
      title: "Protect Your Workplace from Cyber Attacks",
      owner: "John",
      src: "./imgs/card-img.png",
    },
  ];

  const repeats = [1, 2, 3];

  window.addEventListener("scroll", function () {
    var element = document.querySelector("#coldRoom");
    var position = element.getBoundingClientRect();

    // checking whether fully visible
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      setShowUp(true);
    } else {
      setShowUp(false);
    }
  });
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
                  <button className="custom-btn">explore more</button>
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
            <Carousel breakPoints={breakPoints} className="blue-bg-carousel">
              {items.map(item => (
                <Partner key={item.name} name={item.name} src={item.src} />
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* features-section */}
      <section className="features-section">
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
          <br />

          <div className="row">
            {features.map(feature => (
              <FeatureItem {...feature} key={feature.imgName} />
            ))}
          </div>
        </div>
      </section>

      {/* cms-section */}
      <section className="cms-section">
        <div className="partners-header">
          <h1>Our powerful CMS</h1>
          <div className="separator"></div>
        </div>
        <br />
        <br />
        <div className="light-blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="f-center h-100 mb-5">
                  <div>
                    <h2>Web - IOS - Android Connectet</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, minima quidem! Neque, atque. Tempore eveniet,
                      eum delectus architecto deserunt vitae odit natus
                      recusandae aliquam ab error ex ut nostrum nihil?
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, minima quidem! Neque, atque. Tempore eveniet,
                      eum delectus architecto deserunt vitae odit natus
                      recusandae aliquam ab error ex ut nostrum nihil?
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, minima quidem! Neque, atque. Tempore eveniet,
                      eum delectus architecto deserunt vitae odit natus
                      recusandae aliquam ab error ex ut nostrum nihil?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div
                  id="coldRoom"
                  className={`mb-5 ${showUp ? "show-up" : "hide"}`}
                >
                  <img
                    src="./imgs/cold-room.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="mb-5">
                  <img
                    src="./imgs/Thermoton.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className=" mb-5">
                  <div>
                    <h2>Thermoton</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, minima quidem! Neque, atque. Tempore eveniet,
                      eum delectus architecto deserunt vitae odit natus
                      recusandae aliquam ab error ex ut nostrum nihil?
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, minima quidem! Neque, atque. Tempore eveniet,
                      eum delectus architecto deserunt vitae odit natus
                      recusandae aliquam ab error ex ut nostrum nihil?
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptatem, minima quidem! Neque, atque. Tempore eveniet,
                      eum delectus architecto deserunt vitae odit natus
                      recusandae aliquam ab error ex ut nostrum nihil?
                    </p>
                    <button className="custom-btn">explore more</button>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="partners-header">
          <h1>Talk to us about your idea! </h1>
          <div className="separator"></div>
        </div>
        <br />
        <br />
        <div className="light-blue-bg">
          <div className="container">
            <div className="contact-content text-center">
              <h3>
                To find out more about IOTON, or to discuss how we may be of
                service to you, please get in touch.
              </h3>
              <p>
                Unlock the potential of pioneering IoT technology for your
                business.
              </p>
              <button className="custom-btn">contact us</button>
            </div>
          </div>
        </div>
      </section>

      {/* comparison-section */}
      <section className="comparison-section">
        <div className="partners-header">
          <h1>Why We Are Best From Others</h1>
          <div className="separator"></div>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="mb-5">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan facilisis.
                  </p>
                </div>
              </div>
              <div className="advantages">
                <ul>
                  <li>
                    <h2>Super Responsive</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li>
                    <h2>Super Responsive</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                  <li>
                    <h2>Super Responsive</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="f-end mb-5">
                <img src="./imgs/comparison.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blogs */}
      <section className="blogs">
        <div className="light-blue-bg">
          <div className="container">
            <div className="partners-header">
              <h1>The News from Our Blog</h1>
              <div className="separator"></div>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <br />
            <br />
            <div className="row">
              {cards.map(card => {
                return <Card {...card} key={card.title} />;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* team-section */}
      <section className="team-section">
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
            {repeats.map(item => (
              <div className="col-md-4 col-12 mb-2" key={item}>
                <div className="card">
                  <img
                    src="./imgs/card-img.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body team-card">
                    <h3>Tareq</h3>
                    <span>Founder</span>
                    <div className="card-icons">
                      <Facebook />
                      <Twitter />
                      <Linkedin />
                      <Gitlab />
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

const Card = ({ title, owner, src }) => {
  return (
    <div className="col-md-4 col-12 mb-2">
      <div className="card">
        <div>
          <img className="card-img-top" src={src} alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="fw-bold">By </span>
            <span>{owner}</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
          <div className="fg-between">
            <a href="#" className="read-more-btn">
              Read More
            </a>
            <i className="fa-solid fa-arrow-right"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
