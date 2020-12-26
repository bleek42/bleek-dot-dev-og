import React from 'react';
import { useHistory } from 'react-router-dom';

export default function LandingPage() {
	const history = useHistory();

	const dismissLandingPage = () => history.push('/home');

	return (
		<div className="landing-page">
			<span>Welcome to bleek.tech!</span>
			<br />
			<span>
				My name is Brandon and I am a Full-Stack JavaScript engineer, specializing in React
				and Node.js applications.
			</span>
			<button onClick={dismissLandingPage}>Click to continue</button>
		</div>
	);
}
