import { Link, useLocation } from 'react-router-dom';
import { APP_URL } from 'common';
import './Navigation.scss';

const NavigationMain = () => {
	const location = useLocation();
	return (
		<div className="Navigation">
			<div className="Navigation__wrapper">
				<div className="Navigation__logo">
					<Link to={APP_URL.home}>Rushil.dev</Link>
				</div>
				<div className="Navigation__close">
					<span className="close-first"></span>
					<span className="close-second"></span>
				</div>
				{
					<div className="Navigation__links">
						{location.pathname !== APP_URL.about && <Link to={APP_URL.about}>About</Link>}
						{location.pathname !== APP_URL.portfolio && <Link to={APP_URL.portfolio}>Porfoilo</Link>}
						{location.pathname !== APP_URL.contact && <Link to={APP_URL.contact}>Contact</Link>}
					</div>
				}
			</div>
		</div>
	);
};

export default NavigationMain;
