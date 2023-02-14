import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscMenu, VscFoldUp } from 'react-icons/vsc';

import { NavbarData } from './Navbar/NavbarData';
import './Navbar.scss';

export default function Navbar() {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => {
		setToggle(!toggle);
	};

	return (
		<div>
			<form className="toggle-form">
				<label htmlFor="toggle-btn">Menu</label>
				<button onMouseOver={toggleMenu} className="toggle-btn">
					{toggle ? <VscFoldUp /> : <VscMenu />}
				</button>
			</form>
			<nav className={toggle ? 'nav-open' : 'nav-close'}>
				<ul onMouseLeave={toggleMenu}>
					{NavbarData.map((item, idx) => (
						<li
							key={item?.id || idx}
							id={`${item.title.toLowerCase()}-${item.id}`}
							className="navbar-link">
							<Link to={item.path}>
								<i>{item.icon}</i>
								<pre title={item.title}>{item.title}</pre>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
