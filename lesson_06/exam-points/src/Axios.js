import React, { useEffect, useState } from 'react';
import { Space, Tag } from 'antd';
import api, { routes } from './api';

const Axios = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		async function fetchUsers() {
			try {
				setLoading(true);
				const response = await api.get(routes.users);
				setUsers(response.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		fetchUsers();
	}, []);

	return (
		<Space align='center' direction='vertical'>
			{loading ? (
				<Tag color='cyan'>Loading...</Tag>
			) : users.length ? (
				users.map((x) => <Tag color='purple'>{x.name}</Tag>)
			) : (
				<Tag color='orange'>no data</Tag>
			)}
		</Space>
	);
};

export default Axios;
