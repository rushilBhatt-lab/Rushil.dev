import Header from 'components/Header';
import NavigationMain from 'components/Navigation';

const Layout = ({ children }: any) => {
	return (
		<div className="App">
			<Header />
			<NavigationMain />
			<div className="content">{children}</div>
		</div>
	);
};

export default Layout;
