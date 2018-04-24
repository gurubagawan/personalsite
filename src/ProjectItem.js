import React, { Component } from "react";
//import FlipCard from "react-flipcard";
import PropTypes from "prop-types";
import { FlexyFlipCard } from "flexy-flipcards";
//import Flipcard from "@kennethormandy/react-flipcard";

class ProjectItem extends Component {
  render() {
    return (
      <div>
        <FlexyFlipCard>
          <div ref="flipper">test</div>
          <div ref="flipper">more test</div>
        </FlexyFlipCard>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  type: PropTypes.string
};

export default ProjectItem;
