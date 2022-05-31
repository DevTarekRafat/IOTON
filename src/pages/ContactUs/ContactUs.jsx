import React, {useState} from "react";
import "./ContactUs.css";
import { ReactComponent as Email } from "../../icons/email.svg";
import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Call } from "../../icons/call.svg";
import SocialMedia from "../../components/SocialMedia/SocialMedia";




const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://api.ioton.io/api/v1/query/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
          phone_number: mobileNumber
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
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
              <SocialMedia />
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
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      value={name}
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      onChange={(e) => setName(e.target.value)}
                      
                    />
                  </div>
                  <div className="form-group">
                    <input
                      value={email}
                      type="text"
                      className="form-control"
                      placeholder="Your Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                      
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Phone Number"
                          onChange={(e) => setMobileNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          value={subject}
                          type="text"
                          className="form-control"
                          placeholder="Your Subject"
                          onChange={(e) => setSubject(e.target.value)}
                          
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      value={message}
                      placeholder="Write Your Message..."
                      className="form-control"
                      rows="5"
                      onChange={(e) => setMessage(e.target.value)}
                      
                    ></textarea>
                  </div>
                  <div>
                    <button className="contact-btn" type="submit" >Send Message</button>
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
