import React, { useState } from 'react';
import './Navigation.scss';

// interface Props extends navLinks {
// 	activeNavLinkId: string;
// 	setActiveNavLinkId: string;
// }
const NavigationMain = () => {
	const navData = [
		{ navLinkId: 'Home', scrollToId: 'homeContainer' },
		{ navLinkId: 'About', scrollToId: 'aboutContainer' },
		{ navLinkId: 'Portfolio', scrollToId: 'portfolioContainer' },
		{ navLinkId: 'Contact', scrollToId: 'contactContainer' },
	];
	return (
		<div className="Navigation">
			<div className="Navigation__wrapper">
				<div className="Navigation__logo">Rushil.dev</div>
				<div className="Navigation__close">
					<span className="close-first"></span>
					<span className="close-second"></span>
				</div>
				{
					<div className="Navigation__links">
						<a href="#" data-text="HOME" id="home-link">
							HOME
						</a>
						<a href="#" data-text="ABOUT" id="about-link">
							ABOUT
						</a>
						<a href="#" data-text="PORTFOLIO" id="portfolio-link">
							PORTFOLIO
						</a>
						<a href="#" data-text="CONTACT" id="contact-link">
							CONTACT
						</a>
					</div>
				}
			</div>
		</div>
	);
};

export default NavigationMain;
