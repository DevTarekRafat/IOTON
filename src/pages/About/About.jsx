import React, { useEffect, useRef } from "react";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import { animSection, breakPoints, items, Partner } from "../Landing/Landing";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import "./About.css";
import { team } from "../Landing/Landing";

const About = () => {
  let heroSection = useRef(null);
  let teamSection = useRef(null);
  let uxSection = useRef(null);
  let contactSection = useRef(null);
  // let partnersSection = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animSection(heroSection);
    animSection(teamSection);
    animSection(uxSection);
    animSection(contactSection);
    // animSection(partnersSection);
  }, []);

  return (
    <>
      <section className="about-section" ref={ref => (heroSection = ref)}>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="text-center">
                <h2>About Us</h2>
                <p>
                  We are an innovative tech start-app that automates existing
                  procedures through technology solutions. Starting from the
                  catering industry, medical, road traffic control, and more, we
                  work with almost all areas of industry to provide solutions
                  from industrial scale to personal consumers use. We achieve
                  our objectives by using the latest technologies starting from
                  creating integrated systems that use system on chip devices,
                  to problem solving using computer vision and AI.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src="./imgs/about-us.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 f-around flex-column">
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    Our goal is to help our partners and clients save, advance
                    and succeed by offering comprehensive and strong IOT data
                    analysis.
                  </p>
                </div>
                <div>
                  <h3>Our History</h3>
                  <p>
                    This project wouldn’t be able to succeed without the help
                    of our amazing team. Slowly but surely, the team is growing,
                    and we push one another to thrive and reach our full potential.
                    Starting as a simple idea to help make cold room
                    temperature readings more efficient in the hospitality
                    industry, Tareq , founder and senior software engineer
                    started developing the “Thermoton”. Later joined by Flori,
                    our senior hardware engineer, they further developed the
                    idea and built the basis of what we now know as IOTON.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <section className="hero-section" ref={ref => (heroSection = ref)}>
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
        </section> */}
      </section>

      <section
        className="team-section light-blue-bg pt-3 pb-3"
        ref={ref => (teamSection = ref)}
      >
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="partners-header text-center">
                <h1>Our Awesome Team</h1>
                <div className="separator"></div>
                <br />
                <p>
                 We celebrate our successes and look forward to new opportunities.
                  Collaboration is key and we believe that even when facing challenges
                  we must still learn and have fun in the process.{" "}
                </p>
              </div>
            </div>
          </div>
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

      {/* ux */}
      <section className="ux-section" ref={ref => (uxSection = ref)}>
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="partners-header text-center">
                <h2>We Always Try To Understand Users Expectation</h2>
                <p>
                By prioritising our customers' needs, we always try to keep track of all our accounts and subscribers offering a personalised customer experience.
                </p>
                <br />
                <div className="separator"></div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="text-center number-container">
                    <h2>6+</h2>
                    <p>Accounts</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="text-center number-container">
                    <h2>4</h2>
                    <p>Projects</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="text-center number-container">
                    <h2>6+</h2>
                    <p>Experts</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
                  <div className="text-center number-container">
                    <h2>21+</h2>
                    <p>Subscribers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact-section */}
      <section className="contact-section" ref={ref => (contactSection = ref)}>
        <div className="light-blue-bg ">
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
                  <div className="contact-content">
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
                    <div className="f-start">
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
      {/* <section
        className="partners-section"
        ref={ref => (partnersSection = ref)}
      >
        <div className="container">
          <div className="partners-header">
            <h1>Our Partners</h1>
            <div className="separator"></div>
          </div>
          <br />
          <br />
          <div className="partner-carousel">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              navigation
              loop
              breakpoints={breakPoints}
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
    </>
  );
};

export default About;
