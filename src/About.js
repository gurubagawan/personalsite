import React from "react";

const AboutMe = () => {
	return (
		<div className="about-me">
			<a className="alwaysshowme" href="/">
				<i className="material-icons hover-icons back-icon">arrow_back</i>
			</a>
			<div className="profile-header"> A little bit about me</div>
			<div className="row about-body">
				<div className="me-text">
					<img className="profile-photo" src="./profile.jpg" />
					<p>
						I'm a Full-Stack Web Developer with a passion for healthcare and a
						love for tech. <br /> <br />
						My interest in coding started in the summer of 2017 when I took a
						Web-Development Bootcamp at BrainStation Toronto. Over the course of
						10 weeks I was able to gain an in depth understanding of the
						fundamentals of web-development. This was done through daily
						lectures and weekly assignments. BrainStation really helped me with
						kickstarting my career in tech in an exciting way.<br /> <br />
						When I'm not coding, I enjoy thinking about politics, workflow
						optimization, and why Stannis Baratheon is the rightful heir to the
						Iron Throne. I also like to read, write and catch up on the latest
						entry into the Marvel Cinematic Universe. <br /> <br />
						Get in touch with me if you want to know more, or if you want to
						talk about why the Fellowship of the Ring was justified in not
						taking the eagles to Mordor. Unless you say jif... then we may not
						get along (kidding...sort of).
					</p>
					<div className="about-icons">
						<a
							target="_blank"
							href="https://www.linkedin.com/in/guru-bagawan-23504326/"
						>
							<i class="fab fa-linkedin hover-icons nav-icon nav-linkedin" />
						</a>
						<a href="mailto:guru.bagawan@gmail.com">
							<i class="fas fa-envelope hover-icons nav-icon nav-email" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
