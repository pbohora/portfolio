import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
