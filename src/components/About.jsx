import React from "react";
import "../about.css";
import Profile from "../12.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row styles">
        <div className="col-sm-4 text-right">
          <h2 className="text-weight-bold">Pradip Bohora</h2>
          <p>
            <strong>Full Stack Developer</strong>
          </p>
          <p>
            I am a WordPress & Front-end Developer, working for the last five
            years. I have experience working with local clients along with
            clients from all around the world. I have vast knowledge in html,
            css, Javascript , JQuery, Angular (javascript framewok), wordpress
            theme development and so on.
          </p>
        </div>
        <div className="col-sm-4">
          <img src={Profile} alt="" className="profileImg" />
        </div>
        <div className="col-sm-4">
          <h3 className="mb-4">My Skills</h3>
          <div className="progress mb-3">
            <div
              className="progress-bar progressbar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-3">
            <div
              classNameName="progress-bar progressbar"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar progressbar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar progressbar"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div className="progress mb-3">
            <div
              className="progress-bar progressbar "
              role="progressbar"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
