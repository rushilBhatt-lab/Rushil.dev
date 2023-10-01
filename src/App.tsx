import { APP_URL } from 'common';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import * as asyncComponent from './asyncComponents';
import { Suspense } from 'react';
import NavigationMain from 'components/Navigation';
import AppContext from 'components/Utils/Utility';
import PROJECTS_DATA from 'AppData/ProjectData';

function App() {
	return (
		<AppContext.Provider value={PROJECTS_DATA}>
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
			</div>
		</AppContext.Provider>
	);
}

export default App;
