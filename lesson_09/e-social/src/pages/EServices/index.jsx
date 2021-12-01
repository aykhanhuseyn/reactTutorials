import React, { useState, useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import { services as raw } from './data';
import { ServiceItem } from './ServiceItem';
import TextField from '@mui/material/TextField';
import { BiSearch } from 'react-icons/bi';
import eservice from './eservice.module.css';

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

	return (
		<div style={{ padding: '40px 0' }}>
			<div className={eservice._main}>
				<Row
					style={{
						alignItems: 'flex-end',
						marginBottom: '24px',
					}}
				>
					<Col span={12}>
						<Typography.Title
							style={{ color: '#2f438a', fontSize: '18px', fontWeight: '700' }}
							className={eservice._most__viewed}
						>
							Ən çox ziyarət edilən xidmətlər
						</Typography.Title>
					</Col>
					<Col span={12} className={eservice._search__input}>
						<TextField
							fullWidth
							mx={{ m: 1 }}
							id='standard-search'
							label='açar söz və ya sözlər'
							type='search'
							variant='standard'
							onChange={({ target: { value } }) => setSearch(value)}
						/>
						<div className={eservice._search__icon}>
							<BiSearch />
						</div>
					</Col>
				</Row>

				<Row gutter={24} style={{ margin: 0, rowGap: '24px' }}>
					{filterableServices
						.filter((s) => s.selected)
						.map((s) => (
							<ServiceItem key={s.id} {...s} />
						))}
				</Row>
				<Typography.Title
					style={{
						color: '#2f438a',
						fontSize: '18px',
						fontWeight: '700',
						padding: '40px 0',
					}}
					className={eservice._other__service}
				>
					Digər xidmətlər
				</Typography.Title>
				<Row gutter={24} style={{ margin: 0, rowGap: '24px' }}>
					{filterableServices
						.filter((s) => !s.selected)
						.map((s) => (
							<ServiceItem key={s.id} {...s} />
						))}
				</Row>
			</div>
		</div>
	);
};

export { EServices };
