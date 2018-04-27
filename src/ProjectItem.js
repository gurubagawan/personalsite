import React, { Component } from "react";
//import FlipCard from "react-flipcard";
import PropTypes from "prop-types";
import { FlexyFlipCard } from "flexy-flipcards";
//import Flipcard from "@kennethormandy/react-flipcard";

const ProjectItem = props => {
	return props.project.right ? (
		<div
			className={`container project-item ${
				props.project.background ? "project-background" : ""
			}`}
		>
			<div className="row" style={{ display: "flex" }}>
				<div className="col-md-6">
					<img
						className="image center-block"
						src={props.project.image}
						alt={props.project.title}
						width="80%"
					/>
				</div>
				<div className="col-md-6 project-description">
					<h3>{props.project.title} </h3>
					<p className="project-description">
						{props.project.description}
						<br />
					</p>
					<h4> Learning Points </h4>
					<p>{props.project.challenges} </p>
					{props.project.website && (
						<a href={props.project.website} target="_blank">
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
			<div className="row" style={{ display: "flex" }}>
				<div className="col-md-6 project-description">
					<h3>{props.project.title} </h3>
					<p>
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
						className="image center-block align-middle"
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
