import React, { Component } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
	return (
		<div className="main-page container">
			<div className="nav-bar">
				<div className="nav-text">GURU BAGAWAN</div>
				<div className="nav-icons">
					<a target="_blank" href="https://github.com/gurubagawan">
						<img className="icon" src="./icons/github.png" />
					</a>
					<a
						target="_blank"
						href="https://www.linkedin.com/in/guru-bagawan-23504326/"
					>
						<img className="icon" src="./icons/linkedin.png" />
					</a>
					<a href="mailto:guru.bagawan@gmail.com">
						<img className="icon" src="./icons/email.png" />
					</a>
				</div>
			</div>
			<div className="items">
				<div className="row" style={{ display: "flex" }}>
					<div className="main-square alwaysshowme blue-square col-md-6">
						<div className="lighten" />
						<h3>
							<span className="showmeonhover">PROJECTS</span>
						</h3>
						<img className="square-icon" src="./icons/projectsvg.svg" />
					</div>
					<div className="main-square alwaysshowme red-square col-md-6">
						<div className="lighten" />
						<h3>
							<span className="showmeonhover">WRITING</span>
						</h3>
						<img className="square-icon" src="./icons/pen.svg" />
					</div>
				</div>
				<div className="row" style={{ display: "flex" }}>
					<div className="main-square yellow-square alwaysshowme col-md-6">
						<div className="lighten" />
						<h3>
							<span className="showmeonhover about">PROFILE</span>
						</h3>
						<img className="square-icon" src="./icons/avatar.svg" />
					</div>
					<div className="main-square alwaysshowme gunmetal-square col-md-6">
						<div className="lighten" />
						<h3>
							<span className="showmeonhover experience">EXPERIENCE</span>
						</h3>
						<img className="square-icon" src="./icons/resume.svg" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
