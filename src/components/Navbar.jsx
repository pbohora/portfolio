import React, { Component } from "react";
import "../navbar.css";

class Navbar extends Component {
  state = {
    color: "transparent",
    textcolor: "azure"
  };

  listenScrollEvent = e => {
    window.scrollY > 50
      ? this.setState({ color: "azure", textcolor: "red" })
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
        className="navbar navbar-expand-lg navbar-light fixed-top "
      >
        <div className="container">
          <a className="navbar-brand font-weight-bold largetext">Pradip</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse  font-weight-bold text-center navtext"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav ml-auto navtext">
              <li className="nav-item mr-5">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link" href="/about">
                  Porfolio
                </a>
              </li>
              <li className="nav-item mr-5">
                <a className="nav-link" href="/contact">
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
