import { Link, useLocation } from 'react-router-dom';
import { APP_URL } from 'components/Utils/common';
import MobileDrawer from 'components/MobileDrawer';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
import './Navigation.scss';

const NavigationMain = () => {
	const location = useLocation();
	const device = useDeviceDetection();

	return (
		<div className="Navigation">
			<div className="Navigation__wrapper">
				<div className="Navigation__links">
					<Link to={APP_URL.home}>Rushil.dev</Link>
				</div>
				{device === 'handheld' && <MobileDrawer />}
				{device === 'desktop' && (
					<div className="Navigation__links">
						{location.pathname !== APP_URL.about && <Link to={APP_URL.about}>About</Link>}
						{location.pathname !== APP_URL.portfolio && <Link to={APP_URL.portfolio}>Portfolio</Link>}
						{location.pathname !== APP_URL.contact && <Link to={APP_URL.contact}>Contact</Link>}
					</div>
				)}
			</div>
		</div>
	);
};

export default NavigationMain;
