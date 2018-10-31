import React, { Component } from "react";
import Navbar from "./Navbar";
import Typing from "react-typing-animation";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "../home.css";

class Home extends Component {
  render() {
    const intro = [
      "am a software developer",
      "love challenges",
      "am a web developer"
    ];
    return (
      <div>
        <div className="bg">
          <div className="container">
            <div className="home-body text-center">
              <h1 className="home-texthead">Hi, I'm Pradip. I..</h1>
              <div className="home-text bg-danger">
                <TypistLoop interval={1000}>
                  {intro.map(text => (
                    <Typist key={text} startDelay={1000}>
                      {text}
                      <Typist.Backspace count={text.length} delay={2000} />
                    </Typist>
                  ))}
                </TypistLoop>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
