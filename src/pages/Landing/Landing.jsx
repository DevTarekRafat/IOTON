import React, { useState } from "react";
import "./Landing.css";
import Carousel from "react-elastic-carousel";
import { FeatureItem } from "../../components/FeatureItem/FeatureItem";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";

export const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 },
];

export const items = [
  { name: "logo1", src: "./imgs/partner.png" },
  { name: "logo2", src: "./imgs/partner.png" },
  { name: "logo3", src: "./imgs/partner.png" },
  { name: "logo4", src: "./imgs/partner.png" },
  { name: "logo5", src: "./imgs/partner.png" },
  { name: "logo6", src: "./imgs/partner.png" },
  { name: "logo7", src: "./imgs/partner.png" },
];

const Landing = () => {

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

  const cards = [
    {
      title: "The Security Risks of Changing Package Owners",
      owner: "Admin",
      src: "./imgs/welcome.png",
    },
    {
      title: "Tips to Protecting Your Business and Family",
      owner: "Smith",
      src: "./imgs/Thermoton.png",
    },
    {
      title: "Protect Your Workplace from Cyber Attacks",
      owner: "John",
      src: "./imgs/computing.png",
    },
  ];

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

  const exploreCards = [
    {
      title: "Swarm Operations",
      src: "./imgs/swarm.png",
      description:
        "Ioton have contructed a team of specialists, that are working in a micro-UAV’s technology, to construct 3D shapes in the open-air.",
    },
    {
      title: "Next Generation Ananometer",
      src: "./imgs/ananometer.png",
      description:
        "Ioton is currently working in a next tgeneration cutting adge technology of Anemometers, called by us Anemoton.",
    },
    {
      title: "Smart Traffic Light Control",
      src: "./imgs/control.png",
      description:
        "Managment of modern traffic lights using AI algorithms and Computer Vision.",
    },
    {
      title: "Food Safety CMS",
      src: "./imgs/food_safety.png",
      description:
        "Ioton is currently working in a next tgeneration cutting adge technology of Anemometers, called by us Anemoton.",
    },
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
                  <div>
                    <button className="custom-btn">explore more</button>
                  </div>
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
                <div id="coldRoom" className="mb-5 ">
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

      {/* explore-section */}
      <section className="explore-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12">
              <div className="partners-header text-center">
                <h1>Explore Our Use Cases</h1>
                <div className="separator"></div>
                <br />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            {exploreCards.map(card => {
              return <ExploreCard {...card} key={card.title} />;
            })}
          </div>
          <div className="f-center mt-5">
            <button className="explore-btn">Explore more</button>
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
            {team.map(({ name, src, title, linkedIn, preview }) => (
              <div className="col-lg-3 col-md-6 col-12 mb-2" key={name}>
                <div className="card">
                  <img src={src} className="card-img-top" alt="..." />
                  <div className="card-body team-card">
                    <h3>{name}</h3>
                    <span>{title}</span>
                    <div className="card-icons">
                      {/* <Facebook /> */}
                      {/* <Twitter /> */}
                      <Linkedin />
                      {/* <Gitlab /> */}
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

      <section className="signup-section">
        <div className="light-blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <div>
                  <img
                    src="./imgs/comparison.png"
                    alt="welcome-img"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-2 col-12"></div>
              <div className="col-md-6 col-12">
                <div className="signup-content">
                  <div className="partners-header">
                    <h1>Sign up to our Newsletter</h1>
                    <div className="separator"></div>
                    <br />
                    <p>
                      We celebrate our successes and look forward to new
                      opportunities. Collaboration is key challenges and having
                      fun at the same time, we’re built upon this way.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form>
                      <div className="input-felid">
                        <input
                          placeholder="Email"
                          className="form-control email-input"
                          type="email"
                        />
                        <button type="submit">Subscribe</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export const Partner = ({ src, name }) => {
  return (
    <div>
      <img className="img-fluid" src={src} alt={name} />
    </div>
  );
};

const Card = ({ title, owner, src }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-2">
      <div className="blog">
        <div className="blog-img-container">
          <img className="img-fluid" src={src} alt={title} />
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

const ExploreCard = ({ title, src, description }) => (
  <div className="col-md-6 col-12">
    <div className="explore-card fg-between">
      <div>
        <img src={src} alt="" className="img-fluid" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>View Details</span>
      </div>
    </div>
  </div>
);

export default Landing;
