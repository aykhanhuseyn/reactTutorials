import { Form, Input, Button, Checkbox, notification } from 'antd';
import api from '../../api';
import { routes } from '../../api/routes';
import { LoginUser, LoginResponseUser } from '../../models/user';

const styles = {
	main: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
};

// const baseURL = 'http://localhost:3001/';
// const apiRoutes = {
// 	login: 'login',
// 	register: 'register',
// };
// baseURL + login
// http://localhost:3001/login

const Login = () => {
	const onFinish = async (values: LoginUser) => {
		console.log('Success:', values);
		// fetch(`${baseURL}${apiRoutes.login}`, {
		// 	method: 'POST',
		// 	body: JSON.stringify(values),
		// })
		// 	.then((raw) => raw.json())
		// 	.then((data) => console.log('api response', data))
		// 	.catch((e) => console.log('error from api', e));

		try {
			const { data } = await api.post<LoginResponseUser>(routes.login, values);
			notification.success({
				message: 'Success',
				description: 'Successfully logged in.',
			});
			localStorage.setItem('token', data.token);
		} catch (error: any) {
			notification.error({
				message: 'Error',
				description: error?.message || 'Can not log in, General error happened!',
			});
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div style={styles.main}>
			<Form
				name='auth'
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ username: 'johndoe', password: '12345' }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Username'
					name='username'
					// rules={[
					// 	{
					// 		required: true,
					// 		message: 'Enter your username',
					// 	},
					// 	{
					// 		min: 5,
					// 		message: 'Minimum length is 5',
					// 	},
					// 	{
					// 		pattern: /[a-z]*/,
					// 		message: 'Username have to be only letters',
					// 	},
					// ]}
				>
					<Input />
				</Form.Item>

				{/* <Form.Item
					label='ID'
					name='id'
					rules={[
						{
							required: true,
							message: 'Enter your ID',
						},
						{
							pattern: /(A{2}\d{7})|(AZE\d{8})/,
							message: 'ID is not valid',
						},
					]}
				>
					<Input />
				</Form.Item> */}

				<Form.Item
					label='Password'
					name='password'
					// rules={[
					// 	{ required: true, message: 'Please input your password!' },
					// 	{ min: 8, message: 'min is 8' },
					// 	{ max: 10, message: 'max is 10' },
					// 	{
					// 		pattern:
					// 			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
					// 		message: 'Password is not strong enough',
					// 	},
					// ]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name='remember'
					valuePropName='checked'
					wrapperCol={{ offset: 8, span: 16 }}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
