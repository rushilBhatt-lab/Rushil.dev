import { useContext } from 'react';
import PortfolioCard from 'components/Card';
import AppContext from 'components/Utils/context';
import './styles.scss';
import { ProjectDataInterface } from 'AppData/interface';

const Portfolio = () => {
	const projectsData = useContext(AppContext);

	return (
		<div className="container">
			<div className="Portfolio">
				<h1>Portfolio.</h1>
				{projectsData.map((project: ProjectDataInterface, index: any) => (
					<PortfolioCard
						key={index}
						title={project.title}
						description={project.description}
						stack={project.technologies}
						liveAppLink={project.link}
						githubLink={project.githubLink}
					/>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
