import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";
import { projectArray } from "./projects";

import AboutMe from "./About";
import Intro from "./Intro";
import MainPage from "./main2";

const mastermindpic = require("./img/mastermind.png");
const drrobotpic = require("./img/DrRobot.png");

const renderProjects = projectArray.map((thisproject, i) => {
	return <ProjectItem project={thisproject} />;
});

class App extends Component {
	render() {
		return (
			<div className="test">
				<header />
				<Intro />
				<MainPage />
			</div>
		);
	}
}

export default App;
