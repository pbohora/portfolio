import React from 'react';
import '../about.css';
import Profile from '../profile.jpg';

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
              I am a Full-stack Developer.Motivated, problem solving, flexible
              and eager to learn new tools and technology. Seeking a position as
              a Developer where my extensive experience will be further
              developed and utilized.I have good knowledge in html, css,
              Javascript , Typescript, React (javascript library),
              NodeJs/Express, MongoDB,Jest for testing and JAM stack.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={Profile} alt="" className="profileImg" />
          </div>
          <div className="col-lg-4">
            <h3 className="mt-3 mb-3">My Skills</h3>

            <div className="form-inline fontstyle">
              <p>HTML/CSS</p>
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
              <p>Typescript</p>
            </div>

            <div className="progress progressheight mb-3">
              <div
                style={{ width: 200 }}
                className="progress-bar bg-dark"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <div className="form-inline fontstyle">
              <p>REACT</p>
            </div>

            <div className="progress progressheight mb-3">
              <div
                style={{ width: 250 }}
                className="progress-bar bg-dark"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <div className="form-inline fontstyle">
              <p>NODEJS/ Express/ MongoDb</p>
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
