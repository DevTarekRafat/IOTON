import React from "react";
import { team } from "../Landing/Landing";
import { ReactComponent as Linkedin } from "../../icons/Linkedin.svg";
import Card from "../../components/Card/Card";

const Team = () => {
  const cards = [
    {
      title: "UI/UX Designer ",
      src: "./imgs/ui-ux.png",
    },
    {
      title: "React Native Developer",
      src: "./imgs/react.png",
    },
    {
      title: "Electronical Engineer",
      src: "./imgs/electric.png",
    },
  ];
  return (
    <>
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

      <section className="join-team light-blue-bg">
        <div className="partners-header">
          <h1>Join our Team</h1>
          <div className="separator"></div>
          <br />
          <p>
            Are you passionate about disrupting the world to make peoples lives
            better?
          </p>
        </div>
        <br />
        {/* blogs */}
        <div className="container">
          <div className="row">
            {cards.map(card => {
              return <Card {...card} key={card.title} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
