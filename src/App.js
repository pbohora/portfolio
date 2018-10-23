import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
