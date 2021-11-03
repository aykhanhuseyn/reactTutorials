import React from 'react';
import { Button, Col, Space, Typography, Popover } from 'antd';
import {
	LockOutlined,
	UnlockOutlined,
	MoreOutlined,
	FundProjectionScreenOutlined,
	VideoCameraOutlined,
	InfoCircleOutlined,
} from '@ant-design/icons';

const ServiceItem = ({ id, locked, name, handleDelete }) => {
	return (
		<Col
			span={12}
			style={{
				background: '#ffffff',
				padding: '20px',
				border: '3px solid #333333',
				borderRadius: '8px',
			}}
		>
			<Space direction='horizontal'>
				<Button
					shape='circle'
					style={{
						background: locked ? 'red' : 'green',
						borderRadius: '8px',
						height: '20px',
						width: '20px',
					}}
				>
					{locked ? <LockOutlined /> : <UnlockOutlined />}
				</Button>
				<Typography.Paragraph>{name}</Typography.Paragraph>
				<Popover
					placement='bottomRight'
					trigger='click'
					content={() => (
						<div>
							<FundProjectionScreenOutlined />
							<VideoCameraOutlined />
							<InfoCircleOutlined onClick={() => handleDelete(id)} />
						</div>
					)}
				>
					<Button shape='circle'>
						<MoreOutlined />
					</Button>
				</Popover>
			</Space>
		</Col>
	);
};

export { ServiceItem };
