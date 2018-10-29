import React from "react";
import Navbar from "./Navbar";
import Typing from "react-typing-animation";
import "../home.css";

const Home = () => {
  return (
    <div>
      <div className="bg">
        <div className="container">
          <div className="home-body text-center">
            <h1 className="home-texthead">Hi, I'm Pradip. I..</h1>
            <Typing>
              <span className="home-text">am a software Developer</span>
              <Typing.Backspace count={23} />
              <span className="text-center home-text">love challenges</span>}
            </Typing>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
