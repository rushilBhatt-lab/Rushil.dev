import './App.scss';
import NavigationMain from './components/Navigation/Navigation';
import Header from './components/header/Header';
import SocialLinks from './components/socialLinks/socialLinks';

function App() {
	return (
		<div className="App">
			<Header />
			<SocialLinks />
			<NavigationMain />
		</div>
	);
}

export default App;
