

import Navbar from '../Navbar';
import { navLinks } from '../../constants/nav-links';
import { Wrapper } from './Header';

type HeaderProps = JSX.IntrinsicElements['header'] & {
	id: number | string;
	name: string;
	content: string | Array<string>;
	icon?: '\ue456' | '\ue677';
};

export default function Header({ id, name, content, icon }: HeaderProps) {
	console.log('header:', id, name, content, icon);

	return (
		<Wrapper>
			{icon && <i>{icon}</i>}
			<Navbar links={navLinks} />
		</Wrapper>
	);
}

{/* <h1>Brandon Leek</h1>
<h2>bleek.dev</h2> */}
			// <span className="page-header">
			// 	<h6>{name || 'unknown header'}</h6>
			// 	<p>{content || 'no header content'} </p>
			// </span>
// <header id={id ? `hedr-${id}` : 'hedr-0'}>
// </header>
