import './styles.scss';

const About = () => {
	return (
		<div className="container">
			<div className="AboutPage">
				<h1 className="AboutPage__title">About Me.</h1>
				<ul className="AboutPage__timeline">
					<li className="AboutPage__subTitle">Frontend React Developer</li>
					<span className="AboutPage__description">
						<p className="AboutPage__timePeriod">October 2021 - Present</p>
						<p className="AboutPage__location">📍 Warsaw, Poland</p>
					</span>

					<p className="AboutPage__description">
						<ul>
							<li>
								Develop features to attract more users and increase player retention, such as expanding the betting functionality,
								implementing analytic tools to understand player behavior, and creating a feature that provides team stats within the
								application.
							</li>
							<li>
								Craft features and changes to the website to ensure smooth performance on all device types and OS versions, with a
								focus on gathering user device details to improve the development process.
							</li>
							<li>Implement animations to enhance the user experience and trigger positive emotions in players.</li>
							<li>Ensure the best UX practices are implemented throughout the development process.</li>
							<li>
								Collaborate with cross-functional teams including designers, product managers, and backend developers to deliver
								high-quality features on time and within budget.
							</li>
							<li>Participate in code reviews and contribute to the continuous improvement of the development process.</li>
						</ul>

						<span className="AboutPage__techStack"></span>
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
			</div>
		</div>
	);
};

export default About;
