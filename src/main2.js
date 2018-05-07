import React, { Component } from "react";

const MainPage = () => {
	return (
		<div className="two-squares">
			<div> Guru Bagawan </div>
			<br />
			<div className="row" style={{ display: "flex" }}>
				<div className="main-square blue-square col-md-6">Projects</div>
				<div className="main-square red-square col-md-6">Writing</div>
			</div>
			<div className="row" style={{ display: "flex" }}>
				<div className="main-square yellow-square col-md-6">About Me</div>
				<div className="main-square gunmetal-square col-md-6">Experience</div>
			</div>
		</div>
	);
};

export default MainPage;