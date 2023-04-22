import './Header.scss';
import email from '../../assets/images/mail.png';
import { useEffect } from 'react';
import BackgroundParticles from '../Particles/Particles';
function Header() {
	useEffect(() => {}, []);

	return (
		<div className="HeaderComponent">
			<BackgroundParticles />
			<div className="HeaderComponent__wrapper">
				<div className="HeaderComponent__box">
					<div className="HeaderComponent__name">
						<span className="HeaderComponent--color">Hi, I'm Rushil </span>Bhatt
					</div>
					<div className="HeaderComponent__info">
						<span className="txt-rotate HeaderComponent--color">Based in warsaw, poland</span>
					</div>
					<div className="HeaderComponent__contact">
						<a href="Mailto:rushilbhatt533@gmail.com">
							<img src={email} alt="email" className="contactpic" />
						</a>
						{/* <a href="Tel:+48793558667">
							<img src="images/call.png" alt="phone-pic" className="contactpic" />
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
