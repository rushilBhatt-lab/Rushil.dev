import { useContext } from 'react';
import PortfolioCard from 'components/Card';
import AppContext from 'components/Utils/context';
import { ProjectDataInterface } from 'AppData/interface';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
import { APP_URL } from 'components/Utils/common';
import { ReactComponent as ArrowIcon } from '../../assets/images/ArrowIcon.svg';
import './styles.scss';

const Portfolio = () => {
	const projectsData = useContext(AppContext);
	const device = useDeviceDetection();

	return (
		<div className="container">
			<div className="Portfolio">
				<h1>Portfolio.</h1>
				{projectsData.map((project: ProjectDataInterface, index: number) => (
					<PortfolioCard
						key={index}
						title={project.title}
						description={project.description}
						stack={project.technologies}
						liveAppLink={project.link}
						githubLink={project.githubLink}
						imageUrl={project.imageUrl}
					/>
				))}
				{device === 'handheld' && (
					<a className="Portfolio__link" href={APP_URL.contact}>
						<p>Are you convinced to contact me now ? {<ArrowIcon />}</p>
					</a>
				)}
			</div>
		</div>
	);
};

export default Portfolio;
