import React from 'react';
import { Button, Col, Typography, Popover, Row, Tooltip } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import eservice from './eservice.module.css';
import { tooltip } from './data';

const text = (
	<div>
		{tooltip.map((t) => (
			<Tooltip placement='bottomRight' title={t.title}>
				<a href={t.link} target='_blank' className={eservice._tooltip__link}>
					{t.icon}
				</a>
			</Tooltip>
		))}
	</div>
);

const icon = (
	<span className={eservice._icon__title}>Qeydiyyat tələb edir</span>
);

const ServiceItem = ({ locked, name }) => {
	return (
		<Col sm={24} md={12}>
			<Row wrap={false} gutter={16} className={eservice._hover}>
				<Col flex='60px'>
					<Tooltip placement='bottom' arrowPointAtCenter='false' title={icon}>
						<Button
							shape='circle'
							style={{
								background: locked ? '#FCDADA' : '#AAFBDC',
								borderRadius: '50%',
								height: '40px',
								width: '40px',
								lineHeight: '7px',
								textAlign: 'center',
							}}
						>
							{locked ? (
								<LockOutlined style={{ fontSize: '18px', color: '#c09e9e' }} />
							) : (
								<UnlockOutlined style={{ fontSize: '18px', color: '#c09e9e' }} />
							)}
						</Button>
					</Tooltip>
				</Col>
				<Col flex='auto'>
					<Typography.Paragraph
						style={{
							color: '#1f1f1f',
							fontSize: '0.9rem',
							marginBottom: '0px',
							lineHeight: 1.2,
						}}
					>
						{name}
					</Typography.Paragraph>
				</Col>
				<Col flex='60px'>
					<Tooltip placement='bottom' title={text} color='white'>
						<Button type='link'>
							<BiDotsVerticalRounded
								style={{
									color: '#AAAAAA',
									fontSize: '26px',
									fontWeight: '700',
								}}
							/>
						</Button>
					</Tooltip>
				</Col>
			</Row>
		</Col>
	);
};

export { ServiceItem };
