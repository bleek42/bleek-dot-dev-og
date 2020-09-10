import React from 'react';
import screenshot5 from '../../../images/sirilla-learning.jpg';

const Project4 = () => {
	return (
		<div>
			<section className="project">
				<h4 className="title">Sirilla Learning</h4>
				<p>
					My next full-stack effort using React and Node explores the learning
					technique known as spaced-repetition. Spaced-repetition is exactly how
					it sounds: repeating something in timed intervals, in an effort to
					commit to memory new concepts and abilities one wants to learn.
					Highlighted features include a linked-list data structure &
					accompanying algoritihm that serves as a score multiplier, 256-bit
					encryption with JSON WebToken for secure user registration & login,
					and a modern user interface with SASS style sheets. Please note that
					this was a joint effort between a fellow student and I.
				</p>
				<ul>
					<li>
						<a
							href="https://spaced-repetition-sb.now.sh/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to try it live
						</a>
					</li>
					<li>
						<a
							href="https://github.com/thinkful-ei-macaw/	spaced-repetition-client-Brandon-Sara"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to view the client source code{' '}
						</a>
					</li>
					<li>
						<a
							href="https://github.com/thinkful-ei-macaw/spaced-repetition-api-Brandon-Sara"
							rel="noopener noreferrer"
							target="_blank"
						>
							Click here to view the server source code
						</a>
					</li>
				</ul>
				<details>
					<summary>Click here to view screenshots</summary>
					<img
						className="screenshots"
						id="screenshot-5"
						src={screenshot5}
						alt="sirilla-1"
					/>
				</details>
			</section>
		</div>
	);
};

export default Project4;
