import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";
import { mastermind, testarray } from "./projects";

import AboutMe from "./About";
import Intro from "./Intro";

const mastermindpic = require("./img/mastermind.png");
const drrobotpic = require("./img/DrRobot.png");

const renderProjects = testarray.map((thisproject, i) => {
	return <ProjectItem project={thisproject} />;
});

class App extends Component {
	render() {
		return (
			<div>
				<header />
				<Intro />
				<AboutMe />
				{renderProjects}
			</div>
		);
	}
}

export default App;
