import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscMenu, VscFoldUp } from 'react-icons/vsc';

import 'src/styles/navbar.module.scss';

export default function Navbar({ links }) {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => setToggle(!toggle);

	return (
		<div>
			<form className="toggle-form">
				<label htmlFor="toggle-btn">Menu</label>
				<button
					onMouseOver={toggleMenu}
					className="toggle-btn">
					{toggle ? <VscFoldUp /> : <VscMenu />}
				</button>
			</form>
			<nav className={toggle ? 'nav-open' : 'nav-close'}>
				<ul onMouseLeave={toggleMenu}>
					{links.map((link, idx) => (
						<li
							key={link.id || idx}
							id={`${link.title.toLowerCase()}-${item.id}`}
							className="nav-link">
							<Link to={link.path}>
								<i>{link.icon}</i>
								<pre title={link.title}>{link.title}</pre>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
