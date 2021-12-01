import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const SingleUser = () => {
	const { id } = useParams();
	const [user, setUser] = useState();
	const [requestState, setRequestState] = useState({
		isLoading: false,
		isError: false,
		error: null,
	});

	// const handleClick = useCallback(() => console.log('hello'), []);

	useEffect(() => {
		let mount = true;
		// console.log('mounting');

		// document.body.addEventListener('click', handleClick);

		const getUsers = async (id) => {
			try {
				setRequestState((prev) => ({ ...prev, isLoading: true }));
				const response = await api.get(`users/${id}`);
				if (response.data && mount) {
					setUser(response.data);
					setRequestState((prev) => ({ ...prev, isLoading: false, isError: false }));
				} else {
					setRequestState((prev) => ({ ...prev, isLoading: false, isError: true }));
				}
			} catch (error) {
				if (mount)
					setRequestState((prev) => ({
						...prev,
						isLoading: false,
						isError: true,
						error,
					}));
			}
		};

		getUsers(id);

		return () => {
			mount = false;
			// document.body.removeEventListener('click', handleClick);
			// console.log('unmounting');
		};
	}, [id, handleClick]);

	return user ? (
		<div>
			<h1>My name is {user.name}!</h1>
			<p>
				I live in {user.address.city}, and I work at {user.company.name}
			</p>
		</div>
	) : requestState.isLoading ? (
		<div>loading</div>
	) : (
		<div>{requestState.error?.message || 'Unexpected error occured!'}</div>
	);
};

export default SingleUser;
