import React, { Component } from "react";
import Navbar from "./Navbar";
import "../home.css";

import BackImage from "../myhome.jpeg";

const Home = () => {
  return (
    <div className="back">
      <div className>
        <div className="bg">
          <h1 className="text-center">Here I am doing my portfolio</h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
