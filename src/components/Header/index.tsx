import email from '../../assets/images/mail.png';
import { useEffect } from 'react';
import BackgroundParticles from '../Particles/Particles';
import SocialLinks from 'components/socialLinks';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
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
							<span className="HeaderComponent--color">Hi, I'm Rushil </span>Bhatt 👋🏽
						</div>
						<div className="HeaderComponent__info">
							<span className="txt-rotate HeaderComponent--color">Frontend developer based in 📍warsaw, poland</span>
						</div>
						{device === 'desktop' && (
							<div className="HeaderComponent__contact">
								<a href="Mailto:rushilbhatt533@gmail.com">
									<img src={email} alt="email" className="contactpic" />
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
