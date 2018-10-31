import React, { Component } from "react";
import "../portfolio.css";
import ProjectPic from "../image.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div className="bgportfolio">
        <div className="container container-fluid portfolio-body text-white">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center mt-3 mb-5">My Works</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
                saepe voluptate fugiat odit officiis aliquid autem fuga ipsam
                voluptatibus ab molestias culpa atque obcaecati perferendis hic
                provident consequuntur eius corrupti! "Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
            <div className="col-lg">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg">
              <img className="box-height" src={ProjectPic} alt="" />
            </div>
            <div className="col-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                ad. Sed voluptatem veritatis harum maxime a dolores architecto?
                Veritatis dolorem aspernatur autem officia deserunt neque! Atque
                tempore dolorum quidem magni. "Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
