import React from 'react';

import screenshot6 from '../../../images/trouvaille-1.jpg';
import screenshot7 from '../../../images/trouvaille-2.jpg';

const Project5 = () => {
	return (
		<div className="project-5">
			<section className="project">
				<h4 className="title">Trouvaille</h4>
				<p>
					My latest project is a travel planner application with a React & SASS
					user-interface, Google Maps integration, and a secure Node server that
					verifies & sends emails. As a user, you can plan customizable
					cross-country trips according to your interests. Users select their
					origin, destination, and categories (landmarks, recreation, etc.),
					providing places you can visit along your way. Other features include
					secure registration & login, email verification & password reset with
					Nodemailer, and an animated loading screen.
				</p>
				<ul>
					<li>
						<a
							href="https://trouvaille.now.sh/"
							target="_blank"
							rel="noopener noreferrer"
						>
							{' '}
							Click here to demo the live app
						</a>
					</li>
					<li>
						<a href="https://github.com/thinkful-ei-macaw/bleek-bookmarks-app">
							Click here to view the client source code
						</a>
					</li>
					<li>
						<a href="https://github.com/Trouvaille-team/trouvaille-server">
							Click here to view the server source code
						</a>
					</li>
				</ul>
				<details>
					<summary>Click here to view screenshots</summary>
					<img
						className="screenshots"
						id="screenshot-6"
						src={screenshot6}
						alt="trouvaille-1"
					/>
					<img
						className="screenshots"
						id="screenshot-7"
						src={screenshot7}
						alt="trouvaille-2"
					/>
				</details>
			</section>
		</div>
	);
};

export default Project5;
