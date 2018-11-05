import React, { Component } from "react";
import "../portfolio.css";
import ShoppingCart from "../shoppingcart.PNG";
import AnimeSeries from "../animeseries.PNG";

class Portfolio extends Component {
  render() {
    return (
      <div className="bgportfolio" id="portfolio">
        <div className="container container-fluid portfolio-body text-white">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center mt-3 mb-5">My Works</h1>
            </div>
          </div>
          <div className="project-font">
            <div className="row mt-4 project">
              <div className="col-lg m-3">
                <p className="">
                  A simple model of a shopping cart designed with React and for
                  styling Bootstrap is used. In the app you increase the number
                  of item and also delete the entire item.
                </p>
                <button className="btn button-portfolio mr-4">
                  Go to Web page
                </button>
                <a
                  href="https://github.com/pbohora/shopping-list-counter"
                  target="_blank"
                >
                  <button className="btn button-portfolio">
                    Github Repository
                  </button>
                </a>
              </div>
              <div className="col-lg m-3">
                <img className="box-height" src={ShoppingCart} alt="" />
              </div>
            </div>

            <div className="row mt-5 project">
              <div className="col-lg m-3">
                <img className="box-height" src={AnimeSeries} alt="" />
              </div>
              <div className="col-lg m-3">
                <p>
                  A small search engine to find the favorite tv-series or
                  animes. Programming language/ Technologies used,
                  Javascript(React). TVmaze API is used to get the list of the
                  series and anime.
                </p>
                <button className="btn button-portfolio mr-4">
                  Go to Web page
                </button>
                <a
                  href="https://github.com/pbohora/tvSeriesApp"
                  target="_blank"
                >
                  <button className="btn button-portfolio">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
