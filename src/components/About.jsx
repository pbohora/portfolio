import React from "react";
import "../about.css";
import Profile from "../profile.jpg";

const About = () => {
  return (
    <div className="container contianer-fluid aboutbody">
      <div className="row">
        <div className="col-lg-4 aboutme mt-2">
          <h2 className="text-weight-bold">Pradip Bohora</h2>
          <p>
            <strong>Full Stack Developer</strong>
          </p>
          <p>
            I am a WordPress & Front-end Developer, working for the last five
            years. I have experience working with local clients along with
            clients from all around the world. I have vast knowledge in html,
            css, Javascript , JQuery, Angular (javascript framewok), wordpress
            theme development and so on .
          </p>
        </div>
        <div className="col-lg-4">
          <img src={Profile} alt="" className="profileImg" />
        </div>
        <div className="col-lg-4">
          <h3 className="mt-3 mb-3">My Skills</h3>

          <div className="form-inline fontstyle">
            <p>HTML/CSS</p>
            <p className="ml-auto">85%</p>
          </div>

          <div className="progress progressheight mb-3">
            <div
              style={{ width: 300 }}
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
            <p>REACT/REDUX</p>
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
            <p>NODEJS</p>
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
          <div className="form-inline fontstyle">
            <p>JAVA</p>
            <p className="ml-auto">25%</p>
          </div>

          <div className="progress progressheight mb-3">
            <div
              className="progress-bar bg-dark"
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
