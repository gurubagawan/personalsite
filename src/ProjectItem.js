import React, { Component } from "react";
//import FlipCard from "react-flipcard";
import PropTypes from "prop-types";
import { FlexyFlipCard } from "flexy-flipcards";
//import Flipcard from "@kennethormandy/react-flipcard";

const ProjectItem = props => {
	return props.right ? (
		<div
			className={`container project-item ${
				props.background ? "project-background" : ""
			}`}
		>
			<div className="row">
				<div className="col-md-6">
					<img
						className="pull-left image"
						src={props.image}
						alt={props.title}
						width="80%"
					/>
				</div>
				<div className="col-md-6">
					<h3>{props.title} </h3>
					<p className="project-description">
						{props.description}
						<br />
					</p>
					<h4> Learning Points </h4>
					<p className="project-description">{props.challenges} </p>
					{props.website && (
						<a href={props.website} target="_blank">
							View Online
						</a>
					)}
				</div>
			</div>
		</div>
	) : (
		<div
			className={`container project-item ${
				props.project.background ? "project-background" : ""
			}`}
		>
			<div className="row">
				<div className="col-md-6">
					<h3>{props.project.title} </h3>
					<p className="project-description">
						{props.project.description}
						<br />
					</p>
					<h4> Learning Points </h4>
					<p className="project-description">{props.project.challenges} </p>
					{props.project.website && (
						<a href={props.project.website} target="_blank">
							View Online
						</a>
					)}
				</div>
				<div className="col-md-6">
					<img
						className="pull-right image"
						src={props.project.image}
						alt={props.project.title}
						width="80%"
					/>
				</div>
			</div>
		</div>
	);
};

ProjectItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	website: PropTypes.string,
	challenges: PropTypes.string,
	right: PropTypes.bool
};

export default ProjectItem;
