import {React, useState} from "react";
import "./Anemoton.css"

const Anemoton = () => {
    const [emailInput, setEmailInput] = useState({email: "", error: ""});
    const onChangeHandler = e => {
        setEmailInput({email: e.target.value});
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
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: emailInput.email,
                    is_subscribed_to_newsletter: true,
                }),
            };

            fetch("https://api.ioton.io/api/v1/subscribers/", requestOptions)
                .then(res => {
                    if (res.status == 505) {
                        alert("You're already subscribed :)");
                    } else {
                        alert('There was an error!');
                    }
                })
                .catch(err => {
                    console.error(err);
                });
            setEmailInput({email: "", error: ""});
        }
    };
    return (
        <section>
            <div className="comingsoonp container">
                <div className="row mb-5 align-items-center">
                    <p id="content">Coming Soon</p>
                </div>
                <div className="row mb-8 align-items-center text-center">
                    <div className="col">
                        <p>We’re currently working on different projects and this area of the
                            website is under
                            constructions. Follow us on our social media platforms to get first hand news and
                            updates on exciting projects coming up.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-start notify-form">
                    <div className="col">
                        <div className="container justify-content-start">
                            <div>
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
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Anemoton;