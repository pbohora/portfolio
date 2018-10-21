import React from "react";
import Navbar from "./Navbar";
import "../home.css";

import BackImage from "../myhome.jpeg";

const Home = () => {
  return (
    <div className="bg">
      <div className="container container-fluid">
        <h1 className="text-center">Here I am doing my portfolio</h1>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
