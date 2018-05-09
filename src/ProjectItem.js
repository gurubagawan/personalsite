import React, { Component } from "react";
//import FlipCard from "react-flipcard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FlexyFlipCard } from "flexy-flipcards";
//import Flipcard from "@kennethormandy/react-flipcard";

const ProjectItem = props => {
	return (
		<div className="project-item">
			<div className="project-head">
				<h3 className="project-title" style={{ display: "inline-block" }}>
					{props.project.title}
				</h3>
				<a href={props.project.github}>
					<img className="project-icon" src="./icons/github.png" />
				</a>
				{props.project.website && (
					<a href={props.project.website}>
						<img className="project-icon" src="./icons/desktop.svg" />
					</a>
				)}
				<hr />
			</div>
			<div>
				<p className="project-description">
					{props.project.description}
					<br />
				</p>
				<h4> Learning Points </h4>
				<p>{props.project.challenges} </p>
			</div>
		</div>
	);
};

ProjectItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	website: PropTypes.string,
	challenges: PropTypes.string
};

export default ProjectItem;
