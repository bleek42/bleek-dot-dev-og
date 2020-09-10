import React from 'react';
import screenshot3 from '../../images/bookmarks-app.png';

const Project2 = () => {
	return (
		<div className="project-2">
			<section className="project">
				<h4 className="title">Bookmarks App</h4>
				<p>
					My second web application is a Bookmarks application, that also
					utilizes jQuery and a public API that makes post, update, and delete
					requests. It also has an expand/collapse function to view details of
					individual bookmarks, validates user entry forms when adding a new
					bookmark, and a rating function from 1 to 5 that allows you to filter
					by your bookmarks rating. The API functionality allows the user to
					access them from any device, as any bookmarks app should!
				</p>
				<ul>
					<li>
						<a
							href="https://thinkful-ei-macaw.github.io/bleek-bookmarks-app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to try it live
						</a>
					</li>
					<li>
						<a
							href="https://github.com/thinkful-ei-macaw/bleek-bookmarks-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to view the source code{' '}
						</a>
					</li>
				</ul>

				<details>
					<summary>Click here to view screenshots</summary>
					<img
						className="screenshots"
						id="screenshot-3"
						src={screenshot3}
						alt="bookmark-screenshot"
					/>
				</details>
			</section>
		</div>
	);
};

export default Project2;
