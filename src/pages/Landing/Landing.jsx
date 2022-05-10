import React, { useState } from "react";
import "./Landing.css";
import Carousel from "react-elastic-carousel";
import { FeatureItem } from "../../components/FeatureItem/FeatureItem";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import Card from "../../components/Card/Card";
import LightHouse from "../../components/LightHouse/LightHouse";

export const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 5 },
];

export const items = [
  { name: "logo1", src: "imgs/partner.png" },
  { name: "logo2", src: "imgs/partner.png" },
  { name: "logo3", src: "imgs/partner.png" },
  { name: "logo4", src: "imgs/partner.png" },
  { name: "logo5", src: "imgs/partner.png" },
  { name: "logo6", src: "imgs/partner.png" },
  { name: "logo7", src: "imgs/partner.png" },
];

export const team = [
  {
    name: "Tareq",
    title: "Founder-Senior Sofware Engineer",
    src: "imgs/founder.png",
    linkedIn: "",
    preview:
      "Tareq has passion for developing technology-based solutions that deliver real improvements to business, the environment and quality of life",
  },
  {
    name: "Amaia",
    title: "Content Manager",
    src: "imgs/card-img.png",
    linkedIn: "",
    preview:
      "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.",
  },
  {
    name: "Matteo",
    title: "Senior Front-End Developer",
    src: "imgs/card-img.png",
    linkedIn: "",
    preview:
      "Cybersecurity Student, passion for IoT systems and security flaws. ",
  },
  {
    name: "Flori",
    title: "Senior Hardware Engineer",
    src: "imgs/hardware-eng.png",
    linkedIn: "",
    preview:
      "Passionate on latest hardware technologies since the age of fourteen.",
  },
];

export const cards = [
  {
    title: "Welcome To IOTON",
    owner: "Amaia",
    src: "imgs/welcome.png",
    params: "welcome",
    summary:
      'IoT, also known as internet of things, is the connectivity of computing devices incorporated in ordinary things through the Internet so that they may transmit and receive data. IoT is nothing more than a vast network of interconnected "things." "Things" refers to one-of-a-kind devices that communicate with one another over wireless and or cellular networks. Everything from your toothbrush to your phone to your lawnmower can be connected. The Internet of Things (IoT) may be used in every industry and it is allowing us to live smarter lives. These devices, also known as cyber-physical computing, connect two worlds by collecting and transmitting data via the internet and contributing to the huge world of data.',
    details: [
      {
        title: "How do IoT technologies work? ",
        description:
          "When we can't be there physically, IoT devices can act as our eyes and ears. Sensors on devices record data that we see, hear, or feel. They then provide the information as directed, and we evaluate it to inform and automate our subsequent actions or judgments. IoT devices collect data from their surroundings via sensors. This might be anything as the temperature or a real-time video stream. Then, employing active networks, IoT devices make this data available via a public or private cloud as requested. At this stage, software is written to do an action depending on the data, such as turning on a fan or sending a warning. This accumulation of data is analysed, providing important insights that may be used to guide confident actions and product choices.",
      },
      {
        title: "Evolution of IoT",
        description: `IoT devices generated roughly 18 zettabytes of data in 2019, and the IDC predicts that figure to more than triple to over 73 zettabytes – which is equal to 73 trillion gigabytes – by 2025. Although we can't truly define digital data in physical terms, we can claim that if all of that data was transformed into 1990s discs and spread out end to end, it could travel to the moon and back over 5000 times. A precise combination of technologies required to come together and progress concurrently for IoT to evolve.

        This massive increase in IoT data volume could not have occurred without adequate Internet and cloud connection to deliver and receive it. Many IoT devices now rely on a local Wi-Fi network to send sophisticated and large amounts of data. However, as 5G and other cellular networks develop, a recent McKinsey report discusses the implications and how it may untether IoT devices from Wi-Fi networks.
        
        With the consistent growth in demand for IoT sensor innovation, the market transitioned from a few expensive, specialist providers to a highly globalised and price-competitive sensor manufacturing business. Since 2004, the average price of IoT sensors has reduced by more than 70%, supported by a demand-driven increase in product capability and diversity.
        
        Since the beginning of digital storage, there will be twice as much data generated in the next five years. Modern organisations require ever-increasing quantities of memory and computing capacity to use and harness all of that data. The race to do this has been quick, driving IoT's increasing significance and application.
        
        These technologies enable organisations to not only manage and handle massive volumes of IoT data, but also to analyse and learn from it. Big Data is AI and machine learning's favourite, therefore, the greater the size and diversity of the data sets, the more robust and accurate the insights and intelligence that AI-powered advanced analytics can provide. The proliferation of IoT devices has expanded in lockstep with the growth of artificial intelligence and its thirst for  data it generates.
        `,
      },
    ],
    detailedDescription: [
      {
        description: "description",
        imgSrc: "imgSrc",
      },
    ],
  },
  {
    title: "What is the Internet of things?",
    owner: "Amaia",
    src: "imgs/Thermoton.png",
    params: "Thermoton",
  },
  {
    title: "The Importamce of IOT in industry",
    owner: "Amaia",
    src: "imgs/computing.png",
    params: "computing",
  },
];

const Landing = () => {
  const [emailInput, setEmailInput] = useState({ email: "", error: "" });

  const onChangeHandler = e => {
    setEmailInput({ email: e.target.value });
  };

  // emailValidation
  const emailValidation = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailInput.email || regex.test(emailInput.email) === false) {
      setEmailInput({
        ...emailInput,
        error: "Email is not valid",
      });
      return false;
    }
    return true;
  };

  // submitSubscription
  const submitSubscription = e => {
    e.preventDefault();
    if (emailValidation()) {
      //send request
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput.email,
          is_subscribed_to_newsletter: true,
        }),
      };

      fetch("https://api.ioton.io/api/v1/subscribers/", requestOptions)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
      setEmailInput({ email: "", error: "" });
    }
  };

  const features = [
    {
      imgSrc: "imgs/feature1.png",
      title: "Software Development",
      description:
        "Coding apps and websites.Bringing your ideas to life through smart software development.",
      imgName: "feature1",
    },
    {
      imgSrc: "imgs/feature2.png",
      title: "Smart Home, Office",
      description:
        "Convenient home set up, offering smart devices that can be automatically controlled remotely.",
      imgName: "feature2",
    },
    {
      imgSrc: "imgs/feature3.png",
      title: "Smart City",
      description:
        "Using information and communication technology to imporve operational efficiency, and provide better quality of services and welfare.",
      imgName: "feature3",
    },
    {
      imgSrc: "imgs/feature4.png",
      title: "Computer Vision and AI",
      description:
        "Allowing computers and systems to draw information from digital images, videos, and visual inputs therefore making suggestions based on the collected information.",
      imgName: "feature4",
    },
    {
      imgSrc: "imgs/feature5.png",
      title: "Industrial",
      description:
        "Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.",
      imgName: "feature5",
    },
    {
      imgSrc: "imgs/feature6.png",
      title: "System on Chip",
      description:
        "Lowering energy waste, saving on spending cost and reducing space, SoC integrates entire electronic and computer systems.",
      imgName: "feature6",
    },
  ];

  const exploreCards = [
    {
      title: "Swarm Operations",
      src: "imgs/swarm.png",
      description:
        "Ioton have contructed a team of specialists, that are working in a micro-UAV’s technology, to construct 3D shapes in the open-air.",
    },
    {
      title: "Next Generation Ananometer",
      src: "imgs/ananometer.png",
      description:
        "Ioton is currently working in a next tgeneration cutting adge technology of Anemometers, called by us Anemoton.",
    },
    {
      title: "Smart Traffic Light Control",
      src: "imgs/control.png",
      description:
        "Managment of modern traffic lights using AI algorithms and Computer Vision.",
    },
    {
      title: "Food Safety CMS",
      src: "imgs/food_safety.png",
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
            <p>We offer a wide variety of products and services,</p>
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
                  <img src="imgs/cold-room.png" alt="" className="img-fluid" />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="mb-5">
                  <img src="imgs/Thermoton.png" alt="" className="img-fluid" />
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
                <LightHouse />
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
                    src="imgs/idea.png"
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
                <img src="imgs/comparison.png" alt="" className="img-fluid" />
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
              <h1>Discover More</h1>
              <div className="separator"></div>
              <br />
              <p>
                Follow our blog to find out more about the lastest updates in
                the industry, IoT’s and all things related to IOTON.
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
                    src="imgs/comparison.png"
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
                          name="email"
                          value={emailInput.email}
                          onChange={onChangeHandler}
                        />
                        <button type="submit" onClick={submitSubscription}>
                          Subscribe
                        </button>
                      </div>
                      <span className="text-danger">{emailInput.error}</span>
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
