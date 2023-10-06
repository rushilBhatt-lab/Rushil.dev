import Header from 'components/Header';
// import SocialLinks from 'components/socialLinks';
import NavigationMain from 'components/Navigation';

const Layout = ({ children }: any) => {
	return (
		<div className="App">
			<Header />
			{/* <SocialLinks /> */}
			<NavigationMain />
			<div className="content">{children}</div>
		</div>
	);
};

export default Layout;
