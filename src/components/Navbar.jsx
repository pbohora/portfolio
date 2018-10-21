import React from "react";
import "../navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand font-weight-bold largetext">Pradip</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon " />
        </button>
        <div
          className="collapse navbar-collapse font-weight-bold text-center navtext"
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
};

export default Navbar;
