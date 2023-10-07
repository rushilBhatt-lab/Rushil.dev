import { Link } from 'react-router-dom';
import './styles.scss';
const NotFoundPage = () => {
	return (
		<div className="NotFoundPage">
			<h1 className="NotFoundPage__title">404 - Page Not Found</h1>
			<p className="NotFoundPage__description">Sorry, the page you are looking for doesn't exist.</p>
			<Link to="/" className="NotFoundPage__link">
				Go back to the homepage
			</Link>
		</div>
	);
};

export default NotFoundPage;
