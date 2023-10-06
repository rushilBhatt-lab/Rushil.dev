import { FC } from 'react';
import linkdin from '../../assets/images/linkedin logo.png';
import github from '../../assets/images/github-mark-white.png';
import './styles.scss';
const socialLinks: FC = () => {
	return (
		<div className="SocialLinks">
			<div className="SocialLinks__wrapper">
				<a target="_blank" href="https://www.linkedin.com/in/rushil-bhatt-5a8402157/" rel="noreferrer">
					<img src={linkdin} className="SocialLinks__image" alt="linkedin-logo" />
				</a>
				<a target="_blank" href="https://github.com/rushilBhatt-lab" rel="noreferrer">
					<img src={github} className="SocialLinks__image" alt="twitter-logo" />
				</a>
			</div>
		</div>
	);
};

export default socialLinks;
