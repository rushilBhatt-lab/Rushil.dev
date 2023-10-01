import './styles.scss';

const About = () => {
	return (
		<div className="container">
			<div className="AboutPage">
				<h1 className="AboutPage__title">About Me.</h1>
				<ul className="AboutPage__timeline">
					<li className="AboutPage__subTitle">Engineering</li>
					<p className="AboutPage__description">
						A Frontend developer with more than two years of professional experience. My expertise lies in crafting meticulously designed
						and captivating user interfaces. I'm deeply passionate about the world of coding and have honed my skills to excel in creating
						intuitive websites and interactive web applications that adhere to the highest standards of quality and usability. My
						commitment to excellence is reflected in my meticulous attention to detail, ensuring that every project I undertake not only
						meets but exceeds user expectations. I am dedicated to staying at the forefront of technology, continually updating my
						knowledge to incorporate the latest advancements into my work. It's my privilege to contribute to the success of your projects
						and bring innovative solutions to the table. Feel free to reach out if you're looking for a dedicated professional to help you
						achieve your frontend development goals.
					</p>
					<li className="AboutPage__subTitle">Skills </li>
					<p className="AboutPage__description">
						With over 2 years of working as a Frontend Developer, I have gained expertise and have been applying it to tackle real-world
						challenges, transforming ideas into actuality with my skills.
						<p>Javascript</p>
						<p>React</p>
						<p>Typescript</p>
						<p>Redux</p>
						<p>SCSS</p>
						<p>TailWind</p>
						<p></p>
					</p>
				</ul>
				<h3 className="AboutPage__title">My Experiences</h3>
				<ul className="AboutPage__timeline">
					<li className="AboutPage__subTitle">Frontend React Developer</li>
					<p>
						<p className="AboutPage__timePeriod">October 2021 - Present</p>
						<p className="AboutPage__location">📍 Warsaw, Poland</p>
					</p>

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
					<li className="AboutPage_subTitle">Freelancer </li>
					<p>
						<p className="AboutPage__timePeriod">October 2021 - Present</p>
						<p className="AboutPage__location">📍 Warsaw, Poland</p>
					</p>

					<p className="AboutPage__description">
						<ul>
							<li>creating/administrating websites for businesses.</li>
							<li>Manual and automated testing for the website.</li>
							<li>Performing major & minor upgrades as per the client’s request.</li>
							<li>Bug fixing and assuring proper behaviour of the website.</li>
						</ul>
					</p>
					<li className="AboutPage_subTitle">FQA Tester </li>
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
