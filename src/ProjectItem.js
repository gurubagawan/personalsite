import React, { Component } from "react";
//import FlipCard from "react-flipcard";
import PropTypes from "prop-types";
import { FlexyFlipCard } from "flexy-flipcards";
//import Flipcard from "@kennethormandy/react-flipcard";

const ProjectItem = props => {
  return (
    <div
      className={`container project-item ${
        props.background ? "project-background" : ""
      }`}
    >
      <div className="row">
        <div className="col-md-6">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="col-md-6">
          <h3>{props.title} </h3>
          <p className="project-description">
            {props.description}
            <br />
          </p>
          {props.website && (
            <a href={props.website} target="_blank">
              View Online
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  type: PropTypes.string
};

export default ProjectItem;
