import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { Layout } from '../components/layout';
import { Home } from './Home';

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					<Route path='/list' exact component={() => <div>i am list</div>} />
					<Route path='/create' exact component={() => <div>i am create</div>} />
					<Route path='/404' exact component={() => <div>404! not found</div>} />
					<Route path='/' exact component={Home} />
					<Redirect from='*' to='/404' />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
