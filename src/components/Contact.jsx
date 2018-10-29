import React, { Component } from "react";
import "../contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="background">
        <div className="container pb-4">
          <div className="row">
            <div className="col-lg text-center m-5">
              <h1 className="text-white">Contact</h1>
            </div>
          </div>

          <form action="" className="form-styles mb-4 bg-white">
            <div className="form-row">
              <div className="form-group col-lg-6">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Full Name"
                />
              </div>

              <div className="form-group col-lg-6">
                <label htmlFor="">Email Address</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="">Message</label>
              <textarea type="text" className="form-control " row="15" />
            </div>

            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
