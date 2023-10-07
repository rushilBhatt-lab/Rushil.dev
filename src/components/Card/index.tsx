import { FC } from 'react';
import RedirectIcon from './Redirect.svg';
import github from '../../assets/images/github-mark-white.png';
import './styles.scss';

interface Props {
	imageUrl?: string;
	title: string;
	description: string;
	stack: string[];
	liveAppLink: string;
	githubLink: string;
}
const PortfolioCard: FC<Props> = ({ title, description, stack, liveAppLink, githubLink, imageUrl }) => {
	console.log(githubLink);
	return (
		<div className="PortfolioCard">
			<div className="PortfolioCard__container">
				<div className="PortfolioCard__image">
					<img src={imageUrl} alt="test" />
				</div>
				<div className="PortfolioCard__text">
					<h3>{title}</h3>
					<p>{description}</p>
					<div className="PortfolioCard__stack">
						{stack.map((technology, index) => (
							<p key={index}>{technology}</p>
						))}
					</div>
					<div className="PortfolioCard__links">
						<a target="_blank" rel="noreferrer" href={liveAppLink}>
							<p>Live Demo</p>
							<img src={RedirectIcon} alt="Redirect Icon" />
						</a>
						<a target="_blank" rel="noreferrer" href={githubLink}>
							<p>Source Code</p>
							<img src={github} alt="Github Icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
