import React, { Component } from "react";
import "../portfolio.css";
import ProjectPic from "../image.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="bg-light">
        <div className="container container-fluid portfolio-body">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center mt-3 mb-3">My Works</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg m-3">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
            <div className="col-lg m-3">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
            <div className="col-lg m-3">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg m-3">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
            <div className="col-lg m-3">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
            <div className="col-lg m-3">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
