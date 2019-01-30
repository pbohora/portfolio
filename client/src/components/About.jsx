import React from "react";
import CV from "../My CV.pdf";
import "../about.css";
import Profile from "../profile.jpg";

const About = () => {
  return (
    <div className="bgabout" id="about">
      <div className="container aboutbody ">
        <div className="row">
          <div className="col-lg-4 aboutme mt-2">
            <h2 className="text-weight-bold">Pradip Bohora</h2>
            <p>
              <strong>Full Stack Developer</strong>
            </p>
            <p>
              I am a Full-stack Developer.I have good knowledge in html, css,
              Javascript , JQuery, React (javascript library), NodeJs/Express,
              MongoDB and Python(basic).
            </p>
            <a href={CV} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn cvbutton">
                Download CV
              </button>
            </a>
          </div>
          <div className="col-lg-4">
            <img src={Profile} alt="" className="profileImg" />
          </div>
          <div className="col-lg-4">
            <h3 className="mt-3 mb-3">My Skills</h3>

            <div className="form-inline fontstyle">
              <p>HTML/CSS</p>
              <p className="ml-auto">80%</p>
            </div>

            <div className="progress progressheight mb-3">
              <div
                style={{ width: 280 }}
                className="progress-bar bg-dark"
                role="progressbar"
                aria-valuenow="0"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>

            <div className="form-inline fontstyle">
              <p>JAVASCRIPT</p>
              <p className="ml-auto">75%</p>
            </div>

            <div className="progress progressheight mb-3">
              <div
                style={{ width: 263 }}
                className="progress-bar bg-dark"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <div className="form-inline fontstyle">
              <p>REACT</p>
              <p className="ml-auto">50%</p>
            </div>

            <div className="progress progressheight mb-3">
              <div
                style={{ width: 175 }}
                className="progress-bar bg-dark"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <div className="form-inline fontstyle">
              <p>NODEJS/ Express/ MongoDb</p>
              <p className="ml-auto">60%</p>
            </div>

            <div className="progress progressheight mb-3">
              <div
                style={{ width: 210 }}
                className="progress-bar bg-dark"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
