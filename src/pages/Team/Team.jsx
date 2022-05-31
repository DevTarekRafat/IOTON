import React, {useState} from "react";
import { team } from "../Landing/Landing";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import "./Team.css";

const Team = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [emailInput, setEmailInput] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailInput || regex.test(emailInput) === false) {
      setEmailInput({
        ...emailInput,
        error: "Email is not valid",
      });
      return false;
    }
    return true;
  };

  // submitCandidateForm
  const submitCandidateForm = async e => {
    e.preventDefault();
    if (emailValidation()) {
      //send request
      let formData = new FormData();    //formdata object
      formData.append("email", emailInput)
      formData.append("name", name)
      formData.append("message", message)
      if (areaOfInterest) {
        formData.append("area_of_interest", areaOfInterest)
      }
      if (selectedFile) {
        formData.append("in_file", selectedFile, selectedFile.name)
      }
      console.log("submitting data");
      const requestOptions = {
        method: "POST",
        body: formData
      };

      await fetch("http://127.0.0.1:5000/api/v1/candidates/", requestOptions)
          .then(async res => {
            console.log(res);
            let responseText = await res.text();

            if (res.status == 200) {
              alert("Successfully sent! :)");
              setEmailInput("");
              setName("");
              setMessage("");
              setSelectedFile(null);
              setAreaOfInterest("");
            } else if (res.status == 422) {
              if (responseText.includes("content-length")){
                alert("File is too large");
              }
              else {
                alert("Please check if all inputs are valid")
              }
            } else {
                alert("Please check if all inputs are valid")
            }

          })
          .catch(err => {
            console.error(err);
            alert("Error sending the data :(");
          });

    }
  };

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
                 We celebrate our successes and look forward to new opportunities.
                  Collaboration is key and we believe that even when facing
                  challenges we must still learn and have fun in the process.{" "}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Area Of Interest"
                        value={areaOfInterest}
                    onChange={(e) => setAreaOfInterest(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                          accept=".pdf,.doc,.docx,.txt"
                        type="file"
                        className="custom-file-input"
                        value={""}
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                      <span className="text-danger">*Supports only word, pdf, txt files only</span>

                    </div>

                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Write Your Message..."
                    className="form-control"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <button className="contact-btn" type="submit" onClick={submitCandidateForm} >Submit</button>
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
