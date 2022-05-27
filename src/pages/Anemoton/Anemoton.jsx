import { React, useState} from "react";
import "./Anemoton.css"

const Anemoton = () => {
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
    return (
      <section className="comingsoon">
      <div className="comingsoon-content">
        <div className="container">
          <div className="row mb-5">
          <p id="content">Coming Soon</p>
            <section className="container">
              <div className="row mb-5">
              <p id="description">We’re currently working on different projects and this area of the website is under constructions. Follow us on our social media platforms to get first hand news and updates on exciting projects coming up.</p>               
              </div>
              </section>
              <div className="notify-form">
                    <form>
                      <div className="input-felid">
                        <input
                          placeholder="Email"
                          className="form-control email-input"
                          name="email"
                          value={emailInput.email}
                          onChange={onChangeHandler}
                        />
                        <button type="submit" onClick={submitSubscription}>Notify Me
                        </button>
                      </div>
                      <span className="text-danger">{emailInput.error}</span>
                    </form>
                  </div>
                  <div>

                  </div>
              </div>
            </div>
            </div>

            </section>
    );
  }

  export default Anemoton;