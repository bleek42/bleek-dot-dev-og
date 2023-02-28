import Navbar from './Navbar';
import { navLinks } from '../constants/nav-links';

import '../styles/Header.scss';

export default function Header({ id, name, content, icon }) {
	console.log('header:', props);

	return (
		<header id={id ? `hedr-${id}` : 'hedr-0'}>
			{icon && <i>{icon}</i>}
			<h1>Brandon Leek</h1>
			<h2>bleek.dev</h2>
			<Navbar links={navLinks} />
			<span className="page-header">
				<h6>{name || 'unknown header'}</h6>
				<p>{content || 'no header content'} </p>
			</span>
		</header>
	);
}
