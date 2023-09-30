import { Link } from 'react-router-dom';
import { APP_URL } from 'common';
import './Navigation.scss';

const NavigationMain = () => {
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
						<Link to={APP_URL.about}>ABOUT</Link>
						<Link to={APP_URL.portfolio}>PORTFOLIO</Link>
						<Link to={APP_URL.contact}>CONTACT</Link>
					</div>
				}
			</div>
		</div>
	);
};

export default NavigationMain;
