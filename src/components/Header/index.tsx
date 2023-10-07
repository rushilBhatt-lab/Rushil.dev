import email from '../../assets/images/mail.png';
import { useEffect } from 'react';
import BackgroundParticles from '../Particles/Particles';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
import { APP_URL } from 'components/Utils/common';
import { ReactComponent as ArrowIcon } from '../../assets/images/ArrowIcon.svg';
import SocialLinks from 'components/SocialLinks';
import { motion } from 'framer-motion';
import { getTransitions } from 'components/Utils/utility';
import './styles.scss';

function Header() {
	useEffect(() => {}, []);

	const device = useDeviceDetection();

	return (
		<>
			<SocialLinks />
			<div className="HeaderComponent">
				{/* <BackgroundParticles /> */}
				<div className="HeaderComponent__wrapper">
					<div className="HeaderComponent__box">
						<div className="HeaderComponent__name">
							<motion.span {...getTransitions(0.1)} className="HeaderComponent--color">
								Hi, I'm Rushil Bhatt 👋🏽
							</motion.span>
						</div>
						<div className="HeaderComponent__info">
							<motion.span {...getTransitions(0.3)} className="txt-rotate HeaderComponent--color">
								Frontend developer based in 📍warsaw, poland
							</motion.span>
						</div>
						{device === 'desktop' && (
							<div className="HeaderComponent__contact">
								<a href="Mailto:rushilbhatt533@gmail.com">
									<img src={email} alt="email" className="contactpic" />
								</a>
							</div>
						)}
					</div>
					{device === 'handheld' && (
						<a className="HeaderComponent__link" href={APP_URL.about}>
							<motion.p {...getTransitions(0.4)}>
								See More About Me.
								<ArrowIcon />
							</motion.p>
						</a>
					)}
				</div>
			</div>
		</>
	);
}

export default Header;
