import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import { FeatureItem } from "../../components/FeatureItem/FeatureItem";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import { ReactComponent as ServiceIcon } from "../../icons/security.svg";
import { ReactComponent as IntegrableIcon } from "../../icons/integratable.svg";
import { ReactComponent as CustomizableIcon } from "../../icons/customizable.svg";
import { ReactComponent as ConvenientIcon } from "../../icons/convenient.svg";
import { ReactComponent as HeartIcon } from "../../icons/heart.svg";
import { ReactComponent as DollarIcon } from "../../icons/dollar.svg";
import Card from "../../components/Card/Card";
import LightHouse from "../../components/LightHouse/LightHouse";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CircledIcon from "../../components/CircledIcon/CircledIcon";
import { Link } from "react-router-dom";

export const breakPoints = [
  { width: 550, itemsToShow: 2 },
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
    src: "imgs/industry.png",
    params: "industry",
    details: [
      {
        title: "What is IOTON?",
        description:
          "Welcome to IOTON, an innovative tech start-app that automates existing procedures through technology solutions, starting from the catering industry, medical, road traffic control, and more. We work with almost all areas of industry to provide solutions from industrial scale to personal consumers use. We achieve our objectives by using the latest technologies starting from creating integrated systems that use system on chip devices, to problem solving using computer vision and AI.",
      },
      {
        title: "What is our purpose? ",
        description: `Our goal is to help our partners and clients save, advance and succeed by offering comprehensive and strong IOT data analysis. Aiming towards accessible, fast and intelligent services IOTON comprises the latest technology to offer conveniency.We believe that technology plays a critical role in making the world a better place.`,
      },
      {
        title: "Why IOTON?",
        description: `High Security / GDPR
        Data security and privacy is our number one priority when using our latest platform or IoT solutions. We comply with both current UK Data Protection laws and upcoming changes to GDPR but also to that comply with all major industry standards.Cost Effective
        Data security and privacy is our number one priority when using our latest platform or IoT solutions. We comply with both current UK Data Protection laws and upcoming changes to GDPR but also to that comply with all major industry standards.Sustainable 
        By using sustainable materials, and offering new and effective systems like SoC, we strive for a sustainable future.Customizable
        Your Business is unique and you want a solution that adapts to you, hence we make our applications and solution are highly customizable without you having to do anything. We want to work in partnership with our clients to develop solutions for their challenges that save them money and deliver better services to their customers.Integratable  
        Through our API that application can seamlessly integrated with any other platforms of you choice such Google, Amazon, Slack, SMS or reporting frameworks or our alerting system. You will have full control of you data Customer-centric  
        We’re with you every step of your journey, world-class support services provide ongoing support for out solutions `,
      },
      {
        title: "Our team",
        description: `This project wouldn’t be able to succeed without the help of our amazing team. Slowly but surely, the team is growing, and we push one another to thrive and reach our full potential. Starting as a simple idea to help make cold room temperature readings more efficient in the hospitality industry, Tareq , founder and senior software engineer started developing the “Thermoton”.  Later joined by Flori, our senior hardware engineer, they further developed the idea and built the basis of what we now know as IOTON. The team is Welcoming other people to join the team`,
      },
      {
        title: "Where we are headed",
        description: `Join us in this path towards innovation, learning and change.`,
      },
    ],
    summary:
      'IoT, also known as internet of things, is the connectivity of computing devices incorporated in ordinary things through the Internet so that they may transmit and receive data. IoT is nothing more than a vast network of interconnected "things." "Things" refers to one-of-a-kind devices that communicate with one another over wireless and or cellular networks. Everything from your toothbrush to your phone to your lawnmower can be connected. The Internet of Things (IoT) may be used in every industry and it is allowing us to live smarter lives. These devices, also known as cyber-physical computing, connect two worlds by collecting and transmitting data via the internet and contributing to the huge world of data.',
  },
  {
    title: "What is the Internet of things?",
    owner: "Amaia",
    src: "imgs/IOT.png",
    params: "IOT",
    summary:
      "Welcome to IOTON, an innovative tech start-app that automates existing procedures through technology solutions, starting from the catering industry, medical, road traffic control, and more. We work with almost all areas of industry to provide solutions from industrial scale to personal consumers use. We achieve our objectives by using the latest technologies starting from creating integrated systems that use system on chip devices, to problem solving using computer vision and AI.",
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
        description:
          "Just as connection was critical to the growth of the Internet of Things, cloud computing's ascent has been inextricably linked to its progress. Cloud IoT services, with their capacity to supply processing power and high-volume storage on demand, cleared the way for IoT devices to collect and send increasingly vast and complex data sets. Private cloud solutions have also enabled enterprises to manage larger volumes and types of IoT data while still preserving the security of a closed system.",
        imgSrc: "./imgs/electric.png",
      },
    ],
  },
  {
    title: "The Importamce of IOT in industry",
    summary:
      "       The Internet of Things is already present and growing in popularity. IoT’s refer to Internet-connected devices such as smartwatches, Fitbit, or refrigerator. These gadgets may gather and send data via the Internet, adding to the huge universe of data. Intelligent communication is transforming our reality as well as the competitive dynamics in business. For example, you might use creative communication in the form of an online store coupled with the WooCommerce variable pricing plugin to offer a knowledge of the cost per product variable. To demonstrate the rapid rise of IoT and its influence on our lives and companies, we have selected the 10 most astounding IoT facts to demonstrate that they exist and will continue.",
    owner: "Amaia",
    src: "imgs/electric.png",
    params: "electric",
    details: [
      {
        title: "Transportation",
        description:
          "Logistics and transportation companies will definitely improve their profitability, productivity, and operational efficiency as a result of technological advancements. RFID deployment, which is frequently linked with standard line-of-sight technology, provides a comprehensive collection of data to convey in order to make informed decisions.",
      },
      {
        title: "Sustainability",
        description:
          "The capacity of intelligent connected devices to allow and develop applications such as environmental monitoring, territory management, and energy efficiency is well established within the IoT community. However, the financial potential of those applications has been limited and has so far been ignored by the majority of large IoT firms. With the increased emphasis on developing a green economy and reducing climate change, IoT technology has the potential to create green solutions for businesses, cities, and communities. These applications, which include lowering energy costs, enabling remote installations, monitoring failure sites, and many more, will soon move from the margins to the forefront of IoT growth. One of the primary goals of the IoT community should be to emphasise the incorporation of IoT into any feasible model of a sustainable global economy.",
      },
      {
        title: "Manufacturing",
        description: `Engineers frequently seek to technology as a solution while ignoring the source of the problem. The function of IoT is to go beyond SCADA (Supervisory Control and Data Acquisition) for machine operations by delivering data required for timely asset maintenance decisions. Previously, an IoT project was merely a digitisation process. With more data available, manufacturing experts must ask themselves, "What specific business problem are we solving?”`,
      },
    ],
  },
];

export const animSection = selector => {
  gsap.fromTo(
    selector,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: selector,
        toggleActions: "restart none restart none",
      },
    }
  );
};

const Landing = () => {
  let heroSection = useRef(null);
  let featuresSection = useRef(null);
  let cmsSection = useRef(null);
  let exploreSection = useRef(null);
  let contactSection = useRef(null);
  let comparisonSection = useRef(null);
  let blogsSection = useRef(null);
  let teamSection = useRef(null);
  let signupSection = useRef(null);
  const [emailInput, setEmailInput] = useState({ email: "", error: "" });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = [
      heroSection,
      featuresSection,
      cmsSection,
      exploreSection,
      contactSection,
      comparisonSection,
      blogsSection,
      teamSection,
      signupSection,
    ];
    sections.map(sec => {
      animSection(sec);
    });
  }, []);

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
        "Ioton have constructed a team of specialists, that are working in a micro-UAV’s technology, to construct 3D shapes in the open-air.",
    },
    {
      title: "Next Generation Ananometer",
      src: "imgs/ananometer.png",
      description:
        "Ioton is currently working in a next generation cutting adge technology of Anemometers, called by us Anemoton.",
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
  const services = [
    {
      name: "High Security / GDPR",
      description:
        "Data security and privacy is our number one priority when using our latest platform or IoT solutions. We comply with both current UK Data Protection laws, all major industry standards and upcoming changes to GDPR.",
      icon: <ServiceIcon />,
    },
    {
      name: "Integratable",
      description:
        "Through our API our application can seamlessly integrate with any platforms of you choice such Google, Amazon, Slack, SMS or reporting frameworks and our alerting system. This will give our clients full control of their data at anytime, everywhere. ",
      icon: <IntegrableIcon />,
    },
    {
      name: "Cost Effective",
      description:
        "At a competitive price, compared to the similar existing products in the industry, IOTON offers cost effective products without compromising quality or efficiency.",
      icon: <DollarIcon />,
    },
    {
      name: "Customizable",
      description:
        "Our products are fully customizable for our clients needs and specific requirements. Using the latest technology we adapt to different environments. ",
      icon: <CustomizableIcon />,
    },
    {
      name: "Convenient",
      description:
        "At IOTON, we work to make our clinets live more efficient. By using a modern user interface we are able to provide all in one solutions. ",
      icon: <ConvenientIcon />,
    },
    {
      name: "Sustainable ",
      description:
        "At IOTON, we work to make our clinets live more efficient. By using a modern user interface we are able to provide all in one solutions.",
      icon: <HeartIcon />,
    },
  ];

  return (
    <React.Fragment>
      <section className="landing" ref={ref => (heroSection = ref)}>
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
                    We create highly-sophisticated software{" "}
                   <span className="primary-txt"> integrated systems</span>{" "}
                    through customised <span className="primary-txt"> IOT devices</span> .
                    Later processed with advanced algorithms the data is
                    presented simply through customized, user-friendly
                    dashboards.
                  </p>
                  <div>
                    <button className="custom-btn arrow">Learn More
                    </button>
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
      {/* <section className="partners-section">
        <div className="container">
          <div className="partners-header">
            <h2>Our Partners</h2>
            <div className="separator"></div>
          </div>
          <br />
          <br />
          <div className="partner-carousel">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              breakpoints={breakPoints}
              navigation
              loop
            >
              {items.map(item => (
                <SwiperSlide key={item.name}>
                  <Partner name={item.name} src={item.src} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section> */}

      {/* features-section */}
      <section
        className="features-section"
        ref={ref => (featuresSection = ref)}
      >
        <div className="container">
          <div className="features-content">
            <div className="partners-header">
              <h2>Featured Services We Provide</h2>
              <p>We offer a wide variety of products and services,</p>
              <div className="separator" style={{ width: "20%" }}></div>
              <br />
            </div>
            <br />

            <div className="row">
              {features.map(feature => (
                <FeatureItem {...feature} key={feature.imgName} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cms-section */}
      <section className="cms-section" ref={ref => (cmsSection = ref)}>
        <div className="light-blue-bg pt-3 pb-3">
          <div className="partners-header">
            <h2>Our powerful CMS</h2>
            <div className="separator"></div>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div id="coldRoom" className="mb-5 ">
                  <img src="imgs/cold-room.png" alt="" className="img-fluid" />
                  <img
                    src="./imgs/cold-room.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="f-center h-100 mb-5">
                  <div className="bg-white p-3">
                    <h2>Web - IOS - Android Connectet</h2>
                    <p>
                      Our Thermoton device is connected to a CMS that can be easily
                      accessed from any device, from IOS to Android, which is displayed
                      through an application data visualisation for easier understanding
                      and data reading. The collected records are captured in the cloud,
                      which can be accessed very conveniently, anywhere at any time.
                      When the device collects data and reaches the pre-set temperature
                      limit, the user will get a notification via email, SMS, or phone
                      notification.                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className=" mb-5">
                  <div className="bg-white p-3">
                    <h2>Thermoton</h2>
                    <p>
                      Our Thermoton device is connected to a CMS that can be easily
                      accessed from any device,  IOS to Android, which is displayed through
                      an application data visualisation for easier understanding and data
                      reading. The collected records are captured in the cloud which can
                      be accessed very conveniently, anywhere at any time.
                      When the device collects data reaching the pre-set temperature limit,
                      the user will get a notification via email, SMS or phone notification.
                    </p>
                    <a href="/thermoton">
                    <button className="custom-btn">explore more</button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12">
                <div className="mb-5">
                  <img src="imgs/Thermoton.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* explore-section */}
      <section className="explore-section" ref={ref => (exploreSection = ref)}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-12">
              <div className="partners-header text-center">
                <h2>Explore Our Use Cases</h2>
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
        </div>
      </section>

      {/* contact-section */}
      <section className="contact-section" ref={ref => (contactSection = ref)}>
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
                  <div className="contact-content">
                    <h2>Talk to us about your idea! </h2>
                    <br />
                    <p className="find-out-txt">
                      To find out more about IOTON, or to discuss how we may be
                      of service to you, please get in touch.
                    </p>
                    <p>
                      Unlock the potential of pioneering IoT technology for your
                      business.
                    </p>
                    <div>
                      <button className="custom-btn">Contact Us</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* comparison-section */}
      <section
        className="comparison-section"
        ref={ref => (comparisonSection = ref)}
      >
        <div className="partners-header">
          <h2>Why IOTON?</h2>
          <p>
            Aiming towards accessible, fast and intelligent services IOTON
            garantees the following commodities
          </p>
          <div className="separator"></div>
        </div>
        <br />
        <br />
        <div className="container">
          <ol className="services-list">
            <div className="row">
              {services.map((service, idx) => (
                <CircledIcon {...service} idx={idx}  key={idx}/>
              ))}
            </div>
          </ol>
        </div>
      </section>

      {/* blogs */}
      <section className="blogs" ref={ref => (blogsSection = ref)}>
        <div className="light-blue-bg pt-3 pb-3">
          <div className="container">
            <div className="partners-header">
              <h2>Discover More</h2>
              <div className="separator"></div>
              <br />
              <p>
                Follow our blog to find out more about the latest updates in
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
      <section className="team-section" ref={ref => (teamSection = ref)}>
        <div className="container">
          <div className="partners-header">
            <h2>Our Awesome Team</h2>
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
                  <div className="front">
                  <img src={src} className="card-img-top" alt="..." />
                  </div>
                    <div className="back">
                      <div className="white">
                        {preview}
                        </div>
                    </div>
                    <h3>{name}</h3>
                    <span>{title}</span>
                      {/* <Facebook /> */}
                      {/* <Twitter /> */}
                      {/* <Gitlab /> */}
                    </div>
                  </div>
            ))}
          </div>
        </div>
      </section>

      <section className="signup-section" ref={ref => (signupSection = ref)}>
        <div className="light-blue-bg pt-3 pb-3">
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
                  <p>KEEP UPDATED</p>
                  <h6>NEWSLETTER</h6>
                  <p>
                    Enter your email to stay in the loop on new collections,
                    pop-up show sand more
                  </p>
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
    <div className="f-center">
      <img className="img-fluid" src={src} alt={name} />
    </div>
  );
};

const ExploreCard = ({ title, src, description }) => (
  <div className="col-md-6 col-12 mb-3">
    <div className="explore-card h-100">
      <div className="row">
        <div className="col-md-3 col-12">
          <div className="f-center m-2">
            <img src={src} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div>
            <h5>{title}</h5>
            <p>{description}</p>
            <span>View Details</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
