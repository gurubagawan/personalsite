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
        <ProjectItem
          title="Test"
          description="test"
          image="./img/profile.jpg"
          website="https://inbox.google.com/"
        />
      </div>
    );
  }
}

export default App;
