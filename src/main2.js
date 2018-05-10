import React, { Component } from "react";
import { Link } from "react-router-dom";
import Intro from "./Intro";

const MainPage = () => {
	return (
		<div className="main-page container">
			<div className="nav-bar">
				<div className="nav-text">GURU BAGAWAN</div>
				<div className="nav-icons">
					<a target="_blank" href="https://github.com/gurubagawan">
						<i class="fab fa-github hover-icons nav-icon nav-github" />
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/guru-bagawan-23504326/"
					>
						<i class="fab fa-linkedin hover-icons nav-icon nav-linkedin" />
					</a>
					<a href="mailto:guru.bagawan@gmail.com">
						<i class="fas fa-envelope hover-icons nav-icon nav-email" />
					</a>
				</div>
			</div>
			<div className="items">
				<div className="row" style={{ display: "flex" }}>
					<div className="main-square alwaysshowme blue-square col-md-6">
						<Link to="/projects">
							<div className="lighten" />
							<h3>
								<span className="showmeonhover">
									<hr className="hr-main" />
									PROJECTS
									<hr className="hr-main" />
								</span>
							</h3>
							<img className="square-icon" src="./icons/projectsvg.svg" />
						</Link>
					</div>
					<div className="main-square alwaysshowme red-square col-md-6">
						<a href="https://medium.com/@guru.bagawan">
							<div className="lighten" />
							<h3>
								<span className="showmeonhover">
									<hr className="hr-main" />
									WRITING
									<hr className="hr-main" />
								</span>
							</h3>
							<img className="square-icon" src="./icons/pen.svg" />
						</a>
					</div>
				</div>
				<div className="row" style={{ display: "flex" }}>
					<div className="main-square yellow-square alwaysshowme col-md-6">
						<Link to="/profile">
							<div className="lighten" />
							<h3>
								<span className="showmeonhover about">
									<hr className="hr-main" />
									PROFILE
									<hr className="hr-main" />
								</span>
							</h3>
							<img className="square-icon" src="./icons/avatar.svg" />
						</Link>
					</div>
					<div className="main-square alwaysshowme gunmetal-square col-md-6">
						<Link to="/resume">
							<div className="lighten" />
							<h3>
								<span className="showmeonhover experience">
									<hr className="hr-main" />
									RESUME
									<hr className="hr-main" />
								</span>
							</h3>
							<img className="square-icon" src="./icons/resume.svg" />
						</Link>;
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
