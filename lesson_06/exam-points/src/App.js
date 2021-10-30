import React, { useState } from 'react';
import { Button, Card, Input, Form, Table, Modal, Dropdown, Menu } from 'antd';
import { v4 as uuid } from 'uuid';
import { max, min, values, reduce } from 'lodash';

const exams = [
	{
		label: 'math',
		value: uuid(),
	},
	{
		label: 'physics',
		value: uuid(),
	},
	{
		label: 'chemistry',
		value: uuid(),
	},
];

const dataSource = [
	{
		key: uuid(),
		fullname: 'Walter',
		exams: {
			math: 90,
			physics: 80,
			chemistry: 100,
		},
	},
	{
		key: uuid(),
		fullname: 'Jessy',
		exams: {
			math: 90,
			physics: 50,
			chemistry: 20,
		},
	},
];

const columns = (openModal) => [
	{
		title: 'Student Name',
		dataIndex: 'fullname',
		key: 'fullname',
	},
	{
		title: 'Exam',
		key: 'exam',
		render: (_, record) => (
			<Button type='link' onClick={() => openModal(record.key)}>
				Exam
			</Button>
		),
	},
	{
		title: 'Max score',
		key: 'max',
		render: (_, record) => <div>{max([...Object.values(record.exams)])}</div>,
	},
	{
		title: 'Min score',
		key: 'min',
		render: (_, record) => <div>{min([...Object.values(record.exams)])}</div>,
	},
	{
		title: 'Average score',
		key: 'average',
		render: (_, record) => {
			const vals = values(record.exams);
			return vals.length ? (
				<div>{(reduce(vals, (a, c) => a + c) / vals.length).toFixed(2)}</div>
			) : null;
		},
	},
];

function App() {
	const [examList, setExamList] = useState(dataSource);
	const [isModalVisible, setIsModalVisible] = useState(false);

	const onSubmit = ({ fullname }) => {
		setExamList((prevState) => [
			...prevState,
			{ key: uuid(), fullname, exams: {} },
		]);
	};

	const onError = (e) => {
		console.log(e);
	};

	const showModal = (key) => {
		console.log(key);
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<Card title='List of students'>
				<Form
					name='addStudent'
					layout='vertical'
					onFinish={onSubmit}
					onFinishFailed={onError}
				>
					<Form.Item
						label='Add Student name'
						name='fullname'
						rules={[
							{
								required: true,
								message: 'Input is required',
							},
						]}
					>
						<Input type='text' />
					</Form.Item>
					<Form.Item
						wrapperCol={{
							offset: 18,
							col: 4,
						}}
					>
						<Button htmlType='submit' block type='primary'>
							Add
						</Button>
					</Form.Item>
				</Form>
			</Card>
			<Table
				columns={columns(showModal)}
				dataSource={examList}
				pagination={false}
			/>

			<Modal
				title='Add exam result'
				visible={isModalVisible}
				onCancel={handleCancel}
				footer={false}
			>
				<Dropdown
					placement='bottomCenter'
					overlay={
						<Menu>
							<Menu.Item>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.antgroup.com'
								>
									1st menu item
								</a>
							</Menu.Item>
							<Menu.Item>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.aliyun.com'
								>
									2nd menu item
								</a>
							</Menu.Item>
							<Menu.Item>
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://www.luohanacademy.com'
								>
									3rd menu item
								</a>
							</Menu.Item>
						</Menu>
					}
				>
					<Button>Add exam</Button>
				</Dropdown>
			</Modal>
		</div>
	);
}

export default App;
