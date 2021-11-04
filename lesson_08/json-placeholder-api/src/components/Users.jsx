import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SingleUser from './SingleUser';

function Users() {
	// const sp = useSearchParams();
	// const p = useParams();
	// const navi = useNavigate();

	// navi('/404');
	// navi(-2);
	// history.go(-2) history.back()
	// /home, /about, /login, /users ...

	// users?id=15&name=ayxan
	// users/:id

	// console.log('users', { sp }, { p });
	return (
		<Routes>
			<Route path='/' element={<div>this is users page</div>} />
			<Route path='/me' element={<div>this is me</div>} />
			<Route path='/:id' element={<SingleUser />} />
		</Routes>
	);
}

export default Users;
