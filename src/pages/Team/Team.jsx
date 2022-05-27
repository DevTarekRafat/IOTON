import React from "react";
import { team } from "../Landing/Landing";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import "./Team.css";

const Team = () => {
  return (
    <>
      <section className="team-section">
        {/* ref={ref => (teamSection = ref)} */}
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="partners-header text-center">
                <h2>Our Awesome Team</h2>
                <p>
                  We celebrate our successes and look forward to new
                  opportunities. Collaboration is key challenges and having fun
                  at the same time, we’re built upon this way.{" "}
                </p>
                <br />
                <div className="separator"></div>
                <br />
              </div>
            </div>
          </div>

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
      <br />
      <section className="join-team-section ">
        <div className="container">
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="f-center flex-column">
                <h1>Join our Team</h1>
                <p>
                  Are you passionate about disrupting the world to make peoples
                  lives better?
                </p>
                <br />
                <div className="separator"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-12">
              <div>
                <img src="./imgs/team.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <form className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Area Of Iterest"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="file"
                        className="custom-file-input"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Write Your Message..."
                    className="form-control"
                    rows="5"
                  ></textarea>
                </div>
                <div>
                  <button className="contact-btn">Inquire</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
