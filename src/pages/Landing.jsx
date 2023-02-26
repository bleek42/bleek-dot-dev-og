import { Fragment } from 'react';
import Section from '../components/Section';
import XTerm from '../components/XTerm';

export default function Landing() {
	return (
		<Fragment>
			<XTerm
				cols={100}
				rows={100}
			/>
		</Fragment>
	);
}
