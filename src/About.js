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
            I'm a Full-Stack Web Developer with a passion for all things tech
            and healthcare.
            <br /> <br />
            I love finding elegant solutions to complex problems. To me, coding
            is a way for me to express myself.
            <br /> <br />
            I enjoy meeting new people, reading, writing and discussions on why
            Stannis Baratheon is actually the rightful heir to the Iron Throne.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
