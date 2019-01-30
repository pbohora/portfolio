import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter } from "react-router-dom";

import "./app.css";
const options = {
  timeout: 5000,
  position: "top center",
  zIndex: 2500,
  offset: "100px",
  transition: "scale",
  type: "success"
};
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <AlertProvider template={AlertTemplate} {...options}>
            <Contact />
          </AlertProvider>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
