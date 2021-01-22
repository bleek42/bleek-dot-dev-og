import React from 'react';
import { useHistory } from 'react-router-dom';

import './LandingPage.scss';
import brandonMask from '../../images/brandon-mask.png';

export default function LandingPage() {
	const history = useHistory();

	const dismissLandingPage = () => history.push('/home');

	return (
		<div className="landing-page">
			<h2 className="typing">Welcome to bleek.tech</h2>
			<div className="img-container">
				<img id="bleek" src={brandonMask} alt="brandon" />
			</div>
			<button className="dismiss" onClick={dismissLandingPage}>
				Click to continue
			</button>
		</div>
	);
}
