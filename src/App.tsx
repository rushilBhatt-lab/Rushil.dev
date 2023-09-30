import { APP_URL } from 'common';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import * as asyncComponent from './asyncComponents';
import { Suspense } from 'react';
import NavigationMain from 'components/Navigation';

function App() {
	return (
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
	);
}

export default App;
