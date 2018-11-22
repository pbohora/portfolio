import React, { Component } from "react";
import "../portfolio.css";
import Gifty from "../mygifty.PNG";
import AnimeSeries from "../animeseries.PNG";

class Portfolio extends Component {
  render() {
    return (
      <div className="" id="portfolio">
        <div className="container-fluid text-dark">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center mt-3 mb-5">My Works</h1>
            </div>
          </div>
          <div className="project-font">
            <div className="row border-end">
              <div className=" col-lg-6 text-center">
                <h3 className="border-bottom">MyGifty</h3>
                <p>
                  A simulated copy of the online gift shop where you can choose
                  the product according to the occasion(eg-christmas,
                  birthday..) of according to who you want to send the gift
                  (eg-parents, friends,..). React, Node/Express, MongoDb,
                  GraphQl are used to design this app.
                </p>
                <button className="btn button-portfolio">Go to Web page</button>
                <a
                  href="https://github.com/pbohora/Gifty"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn button-portfolio">
                    Github Repository
                  </button>
                </a>
              </div>
              <div className="col-lg-6">
                <img className="box-height" src={Gifty} alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <img className="box-height " src={AnimeSeries} alt="" />
              </div>
              <div className="col-lg-6 text-center">
                <h3 className="second-app border-bottom">Anime Series app</h3>
                <p>
                  A small search engine to find the favorite tv-series or
                  animes. Programming language/ Technologies used,
                  Javascript(React). TVmaze API is used to get the list of the
                  series and anime.
                </p>
                <button className="btn button-portfolio mr">
                  Go to Web page
                </button>
                <a
                  href="https://github.com/pbohora/tvSeriesApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn button-portfolio">
                    Github Repository
                  </button>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <a
                  href=" https://github.com/pbohora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-danger button-end">
                    See more projects in Github
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
