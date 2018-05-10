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
					<i class="fab fa-github hover-icons material-icons project-icon" />
				</a>
				{props.project.website && (
					<a href={props.project.website}>
						<i class="hover-icons material-icons project-icon">computer</i>
					</a>
				)}
				<hr className="hr-project" />
			</div>
			<div>
				<p className="project-description">
					{props.project.description}
					<br />
				</p>
				<h4> Learning Points </h4>
				<p>{props.project.challenges} </p>
				<div className="frameworks">
					<h4> Framworks Used </h4>
					<b>
						{" "}
						{props.project.frameworks.map((framework, i) => {
							return framework + ", ";
						})}
					</b>
				</div>
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
