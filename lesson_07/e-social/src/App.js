import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from './components/Header';
import { EServices } from './components/EServices';

const { Content, Footer } = Layout;

function App() {
	return (
		<Router>
			<Layout>
				<Header />
				<Content>
					<Switch>
						<Route path='/e-services' component={EServices} />
						<Route path='/' exact component={() => <div>home</div>} />
						<Route path='/404' exact component={() => <div>404</div>} />
						<Redirect from='*' to='/404' />
					</Switch>
				</Content>
				<Footer></Footer>
			</Layout>
		</Router>
	);
}

export default App;
