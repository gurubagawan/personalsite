import React, { Component } from "react";
import Typing from "react-typing-animation";

class Intro extends Component {
	render() {
		return (
			<div className="intro">
				<div className="head-image">
					<div className="site-header">
						<Typing speed={80}>
							<span>
								<h2>
									Hey there <Typing.Delay ms={1000} /> I'm Guru.
								</h2>
							</span>
						</Typing>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
