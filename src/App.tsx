import { APP_URL } from 'common';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import * as asyncComponent from './asyncComponents';
import { Suspense } from 'react';
import NavigationMain from 'components/Navigation';
import AppContext, { AboutContext } from 'components/Utils/context';
import PROJECTS_DATA from 'AppData/ProjectData';
import ABOUTDATA from 'AppData/AboutData';
import { useDeviceDetection } from 'components/Hook/useDeviceDetection';
import SocialLinks from 'components/SocialLinks';

function App() {
	const device = useDeviceDetection();

	return (
		<AppContext.Provider value={PROJECTS_DATA}>
			<AboutContext.Provider value={ABOUTDATA}>
				<div className="App">
					<NavigationMain />
					<Suspense fallback={<div>Loading..</div>}>
						<Routes>
							<Route path={APP_URL.home} Component={asyncComponent.home} />
							<Route path={APP_URL.about} Component={asyncComponent.about} />
							<Route path={APP_URL.portfolio} Component={asyncComponent.portfolio} />
							<Route path={APP_URL.contact} Component={asyncComponent.contact} />
						</Routes>
					</Suspense>
					{device === 'handheld' && <SocialLinks />}
				</div>
			</AboutContext.Provider>
		</AppContext.Provider>
	);
}

export default App;
