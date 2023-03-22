type ListProps = {
	items?: any[];
};

export default function List(props: ListProps) {
	console.log('List:', props);

	return (
		<ul>
			{!props.items && <li>No items to display in list component...</li>}
			{props?.items &&
				props.items.length > 0 &&
				props.items.map((item, idx) => (
					<li key={item?.id || idx}>
						{item?.url && (
							<p>
								this is an item in the List component with a url prop:
								<a
									href={item.url}
									target="_blank">
									{item?.text || 'click here'}
								</a>
							</p>
						)}
						{!item.url && (
							<p>
								this is an item in the List component with a text prop:{' '}
								{item.text}
							</p>
						)}
					</li>
				))}
		</ul>
	);
}