import React from "react";
import { team } from "../Landing/Landing";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";


const Team = () => {
  return (
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
                    Risus commodo viverra maecenas accumsan lacus vel facilisis
                    quis ipsum.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
