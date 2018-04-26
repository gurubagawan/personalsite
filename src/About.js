import React from "react";

const AboutMe = () => {
  return (
    <div className="container about-me">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-image" />
        </div>
        <div className="col-md-8 me-text">
          <h3>About Me </h3>
          <p>
            I'm a Full-Stack Web Developer with a passion for healthcare and a
            love for tech. I enjoy thinking about politics, workflow
            optimization, and why Stannis Baratheon is the rightful heir to the
            Iron Throne. I like to write, read and tinker with coding projects.
            Get in touch with me if you would like to know more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
