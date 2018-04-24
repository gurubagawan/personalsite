import React, { Component } from "react";
import Typing from "react-typing-animation";

class Intro extends Component {
  render() {
    return (
      <div>
        <div className="head-image">
          <div className="site-header">
            <Typing speed={80}>
              <span>
                Hey there <Typing.Delay ms={1500} /> I'm Guru Bagawan{" "}
                <Typing.Delay ms={1500} /> and I'm a Web Developer <br /> and an
                aspiring Game of Thrones character.
              </span>
            </Typing>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
