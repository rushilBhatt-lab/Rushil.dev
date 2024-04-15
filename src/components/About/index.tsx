import HelmetMetaTags from 'components/MetaTags/HelmetTags';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
import { APP_URL } from 'Utils/common';
import { ReactComponent as ArrowIcon } from '../../assets/images/ArrowIcon.svg';
import './styles.scss';

const About = () => {
	const device = useDeviceDetection();

	return (
		<>
			<HelmetMetaTags title="About - Rushil Bhatt's Portfolio" description="Timeline about my expiriences" ogurl="about" />
			<div className="container">
				<div className="AboutPage">
					<h1 className="AboutPage__title">About Me.</h1>
					<ul className="AboutPage__timeline">
						<li className="AboutPage__subTitle">Frontend Developer</li>
						<span className="AboutPage__description">
							<p className="AboutPage__timePeriod">October 2021 - Present</p>
							<p className="AboutPage__location">📍 Warsaw, Poland</p>
						</span>

						<p className="AboutPage__description">
							<ul>
								<li>
									Create new features aimed at both attracting a larger user base and improving player retention. These features
									include expanding betting options, implementing analytics tools to gain insights into player behavior, and
									introducing a feature that offers team statistics within the application.
								</li>
								<li>Incorporate animations to elevate the user experience and evoke positive emotions among players.</li>
								<li>Ensure the best UX practices are implemented throughout the development process.</li>
								<li>
									Work closely with multifaceted teams, encompassing designers, product managers, and backend developers, to ensure
									the timely and cost-effective delivery of top-notch features.
								</li>
								<li>Engage in code reviews and actively contribute to the ongoing enhancement of the development workflow.</li>
							</ul>
						</p>
						<li className="AboutPage__subTitle">Freelancer </li>
						<span className="AboutPage__description">
							<p className="AboutPage__timePeriod">October 2021 - Present</p>
							<p className="AboutPage__location">📍 Warsaw, Poland</p>
						</span>

						<p className="AboutPage__description">
							<ul>
								<li>creating/administrating websites for businesses.</li>
								<li>Manual and automated testing for the website.</li>
								<li>Performing major & minor upgrades as per the client’s request.</li>
								<li>Bug fixing and assuring proper behaviour of the website.</li>
							</ul>
						</p>
						<li className="AboutPage__subTitle">FQA Tester </li>
						<span className="AboutPage__description">
							<p className="AboutPage__timePeriod">October 2021 - Present</p>
							<p className="AboutPage__location">📍 Warsaw, Poland</p>
						</span>

						<p className="AboutPage__description">
							<ul>
								<li>Responsible for performing end-to-end testing of new features before the deployment.</li>
								<li>Verifying, performing and creating different check plans.</li>
								<li>Testing UI/UX across various platforms.</li>
							</ul>
						</p>
					</ul>
					{device === 'handheld' && (
						<a className="AboutPage__link" href={APP_URL.portfolio}>
							<p>
								Let's continue to my Projects. <ArrowIcon />
							</p>
						</a>
					)}
				</div>
			</div>
		</>
	);
};

export default About;
