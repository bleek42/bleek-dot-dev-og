import type { ReactSVGElement } from 'react';

import Navbar from '../Navbar';
import { navLinks } from '../../constants/nav-links';
import { Wrapper } from './Header';

type HeaderProps = JSX.IntrinsicElements['header'] & {
	id: number;
	name: string;
	content: string;
	icon?: ReactSVGElement;
};

export default function Header({ id, name, content, icon }: HeaderProps) {
	console.log('header:', id, name, content, icon);

	return (
		<Wrapper>
			{icon && <i>{icon}</i>}
			<h1>Brandon Leek</h1>
			<h2>bleek.dev</h2>
			<Navbar links={navLinks} />
			<span className="page-header">
				<h6>{name || 'unknown header'}</h6>
				<p>{content || 'no header content'} </p>
			</span>
		</Wrapper>
	);
}

// <header id={id ? `hedr-${id}` : 'hedr-0'}>
// </header>
