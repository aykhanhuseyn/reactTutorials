import React, { useState, useEffect } from 'react';
import { Row, Input, Typography } from 'antd';
import { services as raw } from './data';
import { ServiceItem } from './ServiceItem';

const EServices = () => {
	const [search, setSearch] = useState('');
	const [services, setServices] = useState(raw);
	const [filterableServices, setFilterableServices] = useState([]);

	useEffect(() => {
		if (search.trim()) {
			setFilterableServices((prevState) => {
				return prevState.filter((s) =>
					s.name.toLocaleLowerCase('az').includes(search.toLocaleLowerCase('az'))
				);
			});
		} else {
			setFilterableServices(services);
		}
	}, [search, services]);

	const handleDelete = (id) => {
		setServices((prevState) => {
			return prevState.filter((s) => s.id !== id);
		});
	};

	return (
		<div>
			<Input.Search
				name='search'
				onChange={({ target: { value } }) => setSearch(value)}
			/>
			<Typography.Title>Selected</Typography.Title>
			<Row gutter={24}>
				{filterableServices
					.filter((s) => s.selected)
					.map((s) => (
						<ServiceItem handleDelete={handleDelete} key={s.id} {...s} />
					))}
			</Row>
			<Typography.Title>Others</Typography.Title>
			<Row gutter={24}>
				{filterableServices
					.filter((s) => !s.selected)
					.map((s) => (
						<ServiceItem handleDelete={handleDelete} key={s.id} {...s} />
					))}
			</Row>
		</div>
	);
};

export { EServices };
