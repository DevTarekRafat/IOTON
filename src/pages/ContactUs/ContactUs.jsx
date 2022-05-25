import React from "react";
import "./ContactUs.css";
import { ReactComponent as Email } from "../../icons/email.svg";
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Call } from "../../icons/call.svg";
import SocialMedia from "../../components/SocialMedia/SocialMedia";


const ContactUs = () => {
  return (
    <section className="contact">
      <div className="text-center p-5">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="contact-card">
              <div className="icon-container">
                <Location />
              </div>
              <h4>Mail Here</h4>
              <span>hello@ioton.io</span>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="contact-card">
              <div className="icon-container">
                <Email />
              </div>
              <h4>Visit Here</h4>
              <span>
                Kemp House, 160 City Road <br />
                London, EC1V 2NX
                <br />
                United Kingdom
              </span>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="contact-card">
              <div className="icon-container">
                <Call />
              </div>
              <h4>Follow US</h4>
              <SocialMedia/>
            </div>
          </div>
        </div>
      </div>

      <br />
      <section className="in-touch">
        <div className="f-center flex-column">
          <h2>Get In Touch With Us</h2>
          <div className="separator"></div>
          <br />
          <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>

<br />
<br />
        <div className="contact-form-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div>
                  <img src="./imgs/contact.png" alt="" className="img-fluid" />
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
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Subject"
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
                    <button className="contact-btn">send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUs;
