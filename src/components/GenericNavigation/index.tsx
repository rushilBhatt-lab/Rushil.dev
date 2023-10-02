import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
	label: string;
	url: string;
	condition: (path: string) => boolean;
}

interface Props {
	items: NavigationItem[];
}

const GenericNavigation: React.FC<Props> = ({ items }) => {
	const location = useLocation();

	return (
		<div>
			{items.map(
				(item) =>
					item.condition(location.pathname) && (
						<Link key={item.label} to={item.url}>
							{item.label}
						</Link>
					),
			)}
		</div>
	);
};

export default GenericNavigation;
