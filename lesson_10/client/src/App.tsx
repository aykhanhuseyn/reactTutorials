import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import routes from './routes';
import Login from './pages/login';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path={routes.home} element={<div>home</div>} />
					<Route path={routes.login} element={<Login />} />
					<Route path={routes.register} element={<div>register</div>} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
