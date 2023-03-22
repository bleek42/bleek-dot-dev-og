import type { ReactElement, ReactNode, ReactSVGElement } from 'react';

import { Wrapper } from './Footer';

type FooterProps = JSX.IntrinsicElements['footer'] & {
	id: number;
	name: string;
	content: string;
	icon?: SVGElement | ReactElement | ReactNode;
};

export default function Footer(props: FooterProps) {
	console.log('Footer:', props);

	return (
		<Wrapper>
			<i>{'<NoIcon />'}</i>
			<pre>version 0.4.4 by bleek42</pre>
		</Wrapper>
	);
}
