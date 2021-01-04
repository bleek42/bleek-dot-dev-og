import React from 'react';
import { useHistory } from 'react-router-dom';

import About from '../About/About';

import './LandingPage.scss';
import brandonMask from '../../images/brandon-mask.png';

export default function LandingPage() {
	const history = useHistory();

	const dismissLandingPage = () => history.push('/home');

	return (
		<div className="landing-page">
			<h2 className="typing">Welcome to bleek.tech</h2>
			<img id="bleek" src={brandonMask} alt="brandon" />
			<About />
			<button onClick={dismissLandingPage}>Click to continue</button>
		</div>
	);
}
