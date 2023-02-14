import Navbar from './Navbar';

export default function Header(props = {}) {
	console.log('header:', props);

	return (
		<header>
			<h1>Brandon Leek</h1>
			<h2>bleek.dev</h2>
			<Navbar />
			<span className="page-header">
				<h6>{props?.page || 'Untitled Page'}</h6>
			</span>
		</header>
	);
}
