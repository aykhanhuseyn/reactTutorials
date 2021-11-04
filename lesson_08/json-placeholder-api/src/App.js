import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home, NotFound, Users } from './components';

function App() {
	return (
		<div>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
				<Link to='/'>go home</Link>
				<Link to='users'>users</Link>
				<Link to='users/1'>user 1</Link>
				<Link to='users/123'>user 123</Link>
				<Link to='/404'>not found</Link>
			</div>
			<Routes>
				<Route path='/' element={<Home name='hi' />} />
				<Route path='/users/*' element={<Users />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
