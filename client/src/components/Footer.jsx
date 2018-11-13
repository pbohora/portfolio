import React from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../footer.css";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-center text-white pt-2">
          <div className="col-md">
            <i className="fa fa-home" />

            <p>Espoo, Finland</p>
          </div>
          <div className="col-md">
            <i className="fa fa-phone" />
            <p>(+358) 442400488</p>
          </div>
          <div className="col-md">
            <i className="fa fa-envelope" />
            <p>pradeepbohora26@gmail.com</p>
          </div>
        </div>
        <div
          className="row footer pt-2 justify-content-center
        pb-3"
        >
          <a
            href="https://www.facebook.com/pradeep.bohora.52"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-square pr-3 pl-1" />
          </a>
          <a
            href="https://www.instagram.com/pradeepbohora/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram pr-3 pl-1" />
          </a>
          <a
            href="https://github.com/pbohora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github pr-3 pl-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/pradip-bohora-6b2756105/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin-square pr-3 pl-1" />
          </a>
          <i className="fa fa-pinterest-square pr-3 pl-1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
