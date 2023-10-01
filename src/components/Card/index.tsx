import GithubIcon from './Github.svg';
import RedirectIcon from './Redirect.svg';
import './styles.scss';

const PortfolioCard = () => {
	return (
		<div className="PortfolioCard">
			<div className="PortfolioCard__container">
				<div className="PortfolioCard__image"></div>
				<div className="PortfolioCard__text">
					<h3>Kanban-task-manager</h3>
					<p>A task management app using Drag and drop API to make the task management at ease</p>
					<div className="PortfolioCard__stack">
						<p>React</p> <p>SCSS</p>
					</div>
					<div className="PortfolioCard__links">
						<a target="_blank" rel="noreferrer">
							Live Demo
							<img src={RedirectIcon} />
						</a>
						<a target="_blank" rel="noreferrer">
							Source Code
							<img src={GithubIcon} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
