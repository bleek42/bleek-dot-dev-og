import { Wrapper, Summary, Text } from './Details';

type DetailsProps = {};

export default function Details(props: DetailsProps) {
	return (
		<Wrapper>
			<Summary>
				<Text>Details Component: Summary Text</Text>
			</Summary>
		</Wrapper>
	);
}
