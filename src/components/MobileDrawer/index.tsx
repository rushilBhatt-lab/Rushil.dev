import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CrossIcon from './CrossIcon.svg';
import { Link } from 'react-router-dom';
import { APP_URL } from 'Utils/common';
import './styles.scss';

const MobileDrawer: FC = () => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const openDrawer = () => {
		setDrawerOpen(true);
	};

	const closeDrawer = () => {
		setDrawerOpen(false);
	};

	return (
		<div className="MobileDrawer">
			<Button onClick={openDrawer} className="MobileDrawer--icon"></Button>
			<SwipeableDrawer className="MobileDrawer__over" anchor="right" open={isDrawerOpen} onClose={closeDrawer} onOpen={openDrawer}>
				<img src={CrossIcon} onClick={closeDrawer} alt="crossIcon" />
				<div className="MobileDrawer__navItem">
					<li>
						<Link onClick={closeDrawer} to={APP_URL.about}>
							About
						</Link>
					</li>
					<li>
						<Link onClick={closeDrawer} to={APP_URL.portfolio}>
							Portfolio
						</Link>
					</li>
					<li>
						<Link onClick={closeDrawer} to={APP_URL.contact}>
							Contact
						</Link>
					</li>
				</div>
			</SwipeableDrawer>
		</div>
	);
};

export default MobileDrawer;
