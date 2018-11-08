import React, { Component } from "react";
import "../contact.css";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch("/api/world", {
      method: "POST",
      body: JSON.stringify({ message: this.state.message }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.setState({ name: "", email: "", message: "" });
    console.log(this.state);
  };
  render() {
    return (
      <div className="background" id="contact">
        <div className="container pb-4">
          <div className="row">
            <div className="col-lg text-center m-5">
              <h1 className="text-muted">Contact</h1>
            </div>
          </div>

          <form
            onSubmit={this.handleSubmit}
            className="form-styles mb-4 bg-white"
          >
            <div className="form-row">
              <div className="form-group col-lg-6">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  id="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  className="form-control"
                  placeholder="Enter your Full Name"
                />
              </div>

              <div className="form-group col-lg-6">
                <label htmlFor="">Email Address</label>
                <input
                  type="text"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  className="form-control "
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="">Message</label>
              <textarea
                type="text"
                id="message"
                onChange={this.handleChange}
                value={this.state.message}
                className="form-control "
                row="15"
              />
            </div>

            <button className="btn btn-primary button">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
