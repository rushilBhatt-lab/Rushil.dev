import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import './styles.scss';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CrossIcon from './CrossIcon.svg';
import { Link } from 'react-router-dom';
import { APP_URL } from 'common';

const MobileDrawer: FC = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen);
	};

	return (
		<div className="MobileDrawer">
			<Button onClick={toggleDrawer} className="MobileDrawer--icon"></Button>
			<SwipeableDrawer className="MobileDrawer__over" anchor="right" open={isDrawerOpen} onClose={toggleDrawer} onOpen={isDrawerOpen as any}>
				<img src={CrossIcon} onClick={toggleDrawer} alt="crossIcon" />
				<div className="MobileDrawer__navItem">
					<li>{<Link to={APP_URL.about}>About</Link>}</li>
					<li>{<Link to={APP_URL.portfolio}>Porfoilo</Link>}</li>
					<li>{<Link to={APP_URL.contact}>Contact</Link>}</li>
				</div>
			</SwipeableDrawer>
		</div>
	);
};

export default MobileDrawer;
