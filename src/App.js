import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";

import AboutMe from "./About";
import Intro from "./Intro";

class App extends Component {
  render() {
    return (
      <div>
        <header />
        <Intro />
        <AboutMe />
        <ProjectItem />
      </div>
    );
  }
}

export default App;
