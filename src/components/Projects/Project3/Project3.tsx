import React from 'react';
import screenshot4 from '../../../images/covid19.jpg';

const Project3 = () => {
	return (
		<div className="projects-3">
			<section className="project">
				<h4 className="title">Coronavirus in the USA - A Message Board</h4>
				<p>
					Furthering my skills to full-stack programming with more modern
					JavaScript tools, my third effort is an anonymous message board on the
					subject of the COVID-19 outbreak in the United States. Using React.js
					for client-side and Node.js for server-side, I created a small
					platform for users to discuss & share their experiences, hardships,
					triumphs, and whatever else they see relevant by the state or US
					territory they reside in during the pandemic. Users are prompted to
					provide a name or alias they choose, select 1 of 54
					states/territories, and their most recent occupation. From there, they
					are directed to the state they can leave their thoughts, see what
					others commented, and view the current total cases and fatalities
					relative to that state.
				</p>
				<ul>
					<li>
						<a
							href="https://corona-message-board-us.now.sh//"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to try it live
						</a>
					</li>
					<li>
						<a
							href="https://github.com/thinkful-ei-macaw/covid-19-client-bleek"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to view the client source code{' '}
						</a>
					</li>
					<li>
						<a
							href="https://github.com/thinkful-ei-macaw/covid-19-server-bleek"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to view the client source code{' '}
						</a>
					</li>
				</ul>
				<details>
					<summary>Click here to view screenshots</summary>
					<img
						className="screenshots"
						id="screenshot-4"
						src={screenshot4}
						alt="bookmark-screenshot"
					/>
				</details>
			</section>
		</div>
	);
};

export default Project3;
