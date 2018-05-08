import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import { Router, Route, IndexRoute } from "react-router";
import "./App.css";
import ProjectItem from "./ProjectItem";
import PropTypes from "prop-types";
import { projectArray } from "./projects";

import AboutMe from "./About";
import Intro from "./Intro";
import MainPage from "./main2";

const mastermindpic = require("./img/mastermind.png");
const drrobotpic = require("./img/DrRobot.png");

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="test ">
					<Route path="/main" component={MainPage} />
					<Route path="/about" component={AboutMe} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
