import React, { Profiler } from 'react';
import { CgCornerRightDown } from 'react-icons/cg';
import './Home.scss';

export default function Home() {
	return (
		<div className="home">
			<header>
				<h1>Brandon Leek</h1>
				<h2>Web Developer & Mobile Tech Enthusiast</h2>
			</header>
			<section>
				<p>
					Welcome to bleek.tech! My name is Brandon Leek and I'm a full-stack
					web developer. This site was created with React.js and features React
					Hooks, React Router, React Icons, SASS/SCSS stylesheets, unit testing
					with Jest & Enzyme, and background art by Android Jones, aptly titled
					"Source Code"! Links to all provided below!
					<div className="dwn-icn">
						<CgCornerRightDown />
					</div>
				</p>
			</section>
			<section>
				<ul>
					<li>
						<a
							id="pf-repo"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/bleek42/bleek42-react-portfolio"
						>
							Portfolio repository on Github.com
						</a>
					</li>
					<li>
						<a
							id="aj"
							target="_blank"
							rel="noopener noreferrer"
							href="https://androidjones-obtain.com/?gclid=CjwKCAjwh7H7BRBBEiwAPXjadhkPGYgKyIHH1PdY8iEVzfSSD0qIDsHL3uevBzcC362xwoY-xJWkFhoCyq8QAvD_BwE"
						>
							Check out more of Android Jones artwork
						</a>
					</li>
					<li>
						<a
							id="react"
							target="_blank"
							rel="noopener noreferrer"
							href="https://reactjs.org/"
						>
							React.js - A JavaScript Library for creating UserInterfaces
						</a>
					</li>
					<li>
						<a
							id="react"
							target="_blank"
							rel="noopener noreferrer"
							href="https://reactjs.org/"
						>
							React.js - A JavaScript Library for creating UserInterfaces
						</a>
					</li>
					<li>
						<a
							id="hooks"
							target="_blank"
							rel="noopener noreferrer"
							href="https://reactjs.org/docs/hooks-intro.html"
						>
							React Hooks & Functional Components
						</a>
					</li>
					<li>
						<a
							id="r-rtr"
							target="_blank"
							rel="noopener noreferrer"
							href="https://reactjs.org/docs/hooks-intro.html"
						>
							React Router
						</a>
					</li>
					<li>
						<a
							id="icn"
							target="_blank"
							rel="noopener noreferrer"
							href="https://react-icons.github.io/react-icons/"
						>
							React Icons Pack
						</a>
					</li>
					<li>
						<a
							id="scss"
							target="_blank"
							rel="noopener noreferrer"
							href="https://sass-lang.com/"
						></a>
					</li>
					<li>
						<a
							id="hooks"
							target="_blank"
							rel="noopener noreferrer"
							href="https://jestjs.io/"
						>
							Jest Testing Framwork
						</a>
					</li>
					<li>
						<a
							id="enz"
							target="_blank"
							rel="noopener no refeerrer"
							href="https://enzymejs.github.io/enzyme/"
						>
							Enzyme.js
						</a>
					</li>
				</ul>
			</section>
		</div>
	);
}
