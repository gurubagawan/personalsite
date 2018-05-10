import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectItem from "./ProjectItem";
import { projectArray } from "./projects";

const Projects = () => {
	return projectArray.map((ind, i) => {
		return <ProjectItem project={ind} />;
	});
};

const Portfolio = () => {
	return (
		<div>
			<div className="project-container ">
				<a className="alwaysshowme" href="/">
					<i className="material-icons hover-icons back-icon">arrow_back</i>
				</a>
				<div className="projects-header"> Here's how I keep myself busy!</div>
			</div>
			{Projects()}
		</div>
	);
};

export default Portfolio;
