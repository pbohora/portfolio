import React, { Component } from "react";
import "../navbar.css";

class Navbar extends Component {
  state = {
    color: "transparent",
    textcolor: "white"
  };

  listenScrollEvent = e => {
    window.scrollY > 50
      ? this.setState({ color: "black" })
      : this.setState({
          color: "transparent",
          textcolor: "white"
        });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <nav
        style={{
          background: this.state.color,
          color: this.state.textcolor,
          boxShadow: this.state.boxshadow
        }}
        className="navbar navbar-expand-lg navbar-dark fixed-top "
      >
        <div className="container container-fluid">
          <a href="#home" className="navbar-brand font-weight-bold largetext">
            Pradip
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse font-weight-bold text-center navtext"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ml-auto navtext">
              <li className="nav-item mr-5">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link" href="#portfolio">
                  Porfolio
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
