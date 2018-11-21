import React, { Component } from "react";
import { withAlert } from "react-alert";
import "../contact.css";

class Contact extends Component {
  state = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    message: "",
    messageError: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      emailError: "",
      messageError: ""
    };

    if (this.state.name.length < 3) {
      isError = true;
      errors.nameError = "Username needs to be atleast 3 characters long!";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email!";
    }

    if (this.state.message.length < 5) {
      isError = true;
      errors.messageError = "Please write a valid message!";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  handleSubmit = e => {
    e.preventDefault();
    const err = this.validate();

    if (!err) {
      fetch("/api/world", {
        method: "POST",
        body: JSON.stringify({ message: this.state.message }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(
          this.props.alert.show(
            <div className="text-center">
              <h6>Thank you for your message !</h6>
              <p>I will get back to you soon</p>
            </div>
          )
        )
        .then(this.setState({ name: "", email: "", message: "" }));
    }
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
                <p className="text-danger">{this.state.nameError}</p>
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
                <p className="text-danger">{this.state.emailError}</p>
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
              <p className="text-danger">{this.state.messageError}</p>
            </div>

            <button className="btn btn-primary button">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAlert(Contact);
