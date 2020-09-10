import React from 'react';
import screenshot1 from '../../../images/quiz-app.png';
import screenshot2 from '../../../images/quiz-app2.png';

const Project1 = () => {
	return (
		<div className="project-1">
			<section className="project" id="jquery-quiz">
				<h4 className="title">Multiple Choice Quiz App</h4>
				<p>
					My first web application is a simple 5 question quiz, made for anyone
					that enjoys simple bar trivia and wants to test their knowledge of
					worldly, yet relatively basic facts. This application keeps track of
					the users score, displays whether the user submitted a correct or
					incorrect answer after every question and allows the user to reset the
					quiz from the beginning upon completion. This application utilizes the
					widely deployed Javascript jQuery library, which is used in more than
					half of the top 1 million websites in the world!
				</p>
				<ul>
					<li>
						<a
							href="https://thinkful-ei-macaw.github.io/quizapp_DB/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to try it live
						</a>
					</li>
					<li>
						<a
							href="https://github.com/thinkful-ei-macaw/quizapp_DB"
							target="_blank"
							rel="noopener noreferrer"
						>
							Click here to view the source code
						</a>
					</li>
				</ul>
				<details>
					<summary>Click here to view screenshots</summary>
					<img
						id="screenshot-1"
						src={screenshot1}
						alt="quiz-app-screenshot1"
						width="350"
						height="300"
					/>
					<img
						className="screenshots"
						id="screenshot-2"
						src={screenshot2}
						alt="quiz-app-screenshot2"
						width="350"
						height="300"
					/>
				</details>
			</section>
		</div>
	);
};

export default Project1;
