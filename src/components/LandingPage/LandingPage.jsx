import React, { useState, useRef } from 'react';

const LandingPage = ({ handleLanding }) => {
	return (
		<div className="landing-page">
			<span>Welcome to bleek.tech!</span>
			<br />
			<span>
				My name is Brandon and I am a Full-Stack JavaScript engineer, specializing in React
				and Node.js applications.
			</span>
			<button onClick={handleLanding}>Continue to bleek.tech</button>
		</div>
	);
};

export default LandingPage;
