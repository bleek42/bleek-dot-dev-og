import React from 'react';
import './Projects.scss'

export default function Projects() {
	return (
		<div className="projects">
			<section className="project">
				<h4 className="title">Multiple Choice Quiz App</h4>
				<p>My first web application is a simple 5 question quiz, made for anyone
				that enjoys simple bar trivia and wants to test their knowledge of
				worldly, yet relatively basic facts. This application keeps track of the
				users score, displays whether the user submitted a correct or incorrect
				answer after every question and allows the user to reset the quiz from
				the beginning upon completion. This application utilizes the widely
				deployed Javascript jQuery library, which is used in more than half of
								the top 1 million websites in the world!</p>
				<p>
					You can take the quiz yourself
										<a
						href="https://thinkful-ei-macaw.github.io/quizapp_DB/"
						target="_blank" rel="noopener noreferrer"
					>
						here!
										</a>
										The source code can be found
										<a
						href="https://github.com/thinkful-ei-macaw/quizapp_DB"
						target="_blank" rel="noopener noreferrer"
					>
						here!
										</a>
				</p>
				<img
					id="screenshot-1"
					src="../../../public/images/quiz-app2.png"
					// src="images/quiz app2.png"
					alt="quiz-app-screenshot1"
					width="350"
					height="300"
				/>
				<img
					className="screenshots"
					id="screenshot-2"
					src="../../../public/images/quiz-app.png"
					alt="quiz-app-screenshot2"
					width="350"
					height="300"
				/>
			</section>
			<section className="project">
				<h4 className="title">Bookmarks App</h4>
				<p>My second web application is a Bookmarks application, that also utilizes
				jQuery and a public API that makes post, update, and delete requests. It
				also has an expand/collapse function to view details of individual
				bookmarks, validates user entry forms when adding a new bookmark, and a
				rating function from 1 to 5 that allows you to filter by your bookmarks
				rating. The API functionality allows the user to access them from any
								device, as any bookmarks app should!</p>
				<a
					href="https://thinkful-ei-macaw.github.io/bleek-bookmarks-app/"
					target="_blank" rel="noopener noreferrer"
				>
					Click here to see it live!
										</a>
				<a href="https://github.com/thinkful-ei-macaw/bleek-bookmarks-app"
					target="_blank" rel="noopener noreferrer">
					The client-side code can be found here!
										</a>
				<img
					className="screenshots"
					id="screenshot-3"
					src="../../../public/images/"
					alt="bookmark-screenshot"
					width="600"
					height="500"
				/>
			</section>
			<section className="project">
				<h4 className="title">
					Coronavirus in the USA - A Message Board
								</h4>
				<p>Furthering my skills to full-stack programming with more modern
				JavaScript tools, my third effort is an anonymous message board on the
				subject of the COVID-19 outbreak in the United States. Using React.js
				for client-side and Node.js for server-side, I created a small platform
				for users to discuss & share their experiences, hardships, triumphs, and
				whatever else they see relevant by the state or US territory they reside
				in during the pandemic. Users are prompted to provide a name or alias
				they choose, select 1 of 54 states/territories, and their most recent
				occupation. From there, they are directed to the state they can leave
				their thoughts, see what others commented, and view the current total
								cases and fatalities relative to that state.</p>
				<a href="https://corona-message-board-us.now.sh//" target="_blank" rel="noopener noreferrer">
					Click here to see it live!
										</a>
				<a href="https://github.com/thinkful-ei-macaw/covid-19-client-bleek" target="_blank" rel="noopener noreferrer">
					The client source code can be found here!
										</a>
				<a href="https://github.com/thinkful-ei-macaw/covid-19-server-bleek" target="_blank" rel="noopener noreferrer">The server source code can be found here!</a>
				<img
					className="screenshots"
					id="screenshot-4"
					src="../../../public/images/"
					alt="bookmark-screenshot"
					width="600"
					height="500"
				/>
			</section>
			<section className="project">
				<h4 className="title">
					Spaced Repetition & The Spanish Language
								</h4>
				<p>My next full-stack effort using React and Node explores the learning
				technique known as spaced-repetition. Spaced-repetition is exactly how
				it sounds: repeating something in timed intervals, in an effort to
				commit to memory new concepts and abilities one wants to learn.
				Highlighted features include a linked-list data structure & accompanying
				algoritihm that serves as a score multiplier, 256-bit encryption with
				JSON WebToken for secure user registration & login, and a modern user
				interface with SASS style sheets. Please note that this was a joint
								effort between a fellow student and I.</p>
				<a
					href="https://spaced-repetition-sb.now.sh/register"
					target="_blank" rel="noopener noreferrer"
				>
					Click here to see it live!
										</a>
				<a href="https://github.com/thinkful-ei-macaw/spaced-repetition-client-Brandon-Sara"
					target="_blank" rel="noopener noreferrer">
					The client source code can be found here!
										</a>
										The server source code can be found
										<a href="https://github.com/thinkful-ei-macaw/spaced-repetition-api-Brandon-Sara" rel="noopener noreferrer" target="_blank">here!
										</a>
				<img
					className="screenshots"
					id="screenshot-5"
					src="../../../public/images/"
					alt="bookmark-screenshot"
				/>
			</section>
			<section className="project">
				<h4 className="title">Trouvaille</h4>
				<p>My latest project is a travel planner application with a React & SASS
				user-interface, Google Maps integration, and a secure Node server that
				verifies & sends emails. As a user, you can plan customizable
				cross-country trips according to your interests. Users select their
				origin, destination, and categories (landmarks, recreation, etc.),
				providing places you can visit along your way. Other features include
				secure registration & login, email verification & password reset with
								Nodemailer, and an animated loading screen.</p>
				<a
					href="https://thinkful-ei-macaw.github.io/bleek-bookmarks-app/"
					target="_blank" rel="noopener noreferrer"
				>
				</a>
				<a href="https://github.com/thinkful-ei-macaw/bleek-bookmarks-app">
					Click here to view client source code!
										</a>
				<a href="https://github.com/Trouvaille-team/trouvaille-server">
					Click here to view server source code!
										</a>
				<img
					className="screenshots"
					id="screenshot-6"
					src="../../../public/images/"
					alt="bookmark-screenshot"
				/>
			</section>
		</div >
	);
}
