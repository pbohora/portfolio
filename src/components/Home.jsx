import React from "react";
import Navbar from "./Navbar";
import "../home.css";

const Home = () => {
  return (
    <div className="back">
      <div>
        <div className="bg">
          <h1 className="text-center home-body">
            Here I am doing my portfolio
          </h1>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
