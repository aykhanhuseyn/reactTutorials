import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
// import { PrivateRoute } from '../HOC/PrivateRoute';
import { Layout } from '../components/layout';
import { Home } from './Home';
import { List } from './List';
import { NotFoud } from './NotFoud';

function App() {
	return (
		<Router>
			<Layout>
				<Switch>
					{/* <PrivateRoute
						user={{ name: 'Sabina' }}
						path='/admin'
						exact
						component={() => <div>welcome, my ruler!</div>}
					/> */}
					<Route path='/list' exact component={List} />
					<Route path='/create' exact component={() => <div>i am create</div>} />
					<Route path='/404' exact component={NotFoud} />
					<Route path='/home' exact component={Home} />
					<Redirect from='/' exact to='/home' />
					<Redirect from='*' to='/404' />
				</Switch>
			</Layout>
		</Router>
	);
}

export default App;
