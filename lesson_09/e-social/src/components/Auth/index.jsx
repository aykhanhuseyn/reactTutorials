import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { TextField, Button } from '@mui/material';
import { Modal, Col, Tabs } from 'antd';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { loginSchema } from './yupSchema';

const tabKeys = ['login', 'asan'];

const AuthModal = ({ visible, close }) => {
	const [activeKey, setActiveKey] = React.useState('login');
	const [swiper, setSwiper] = React.useState();

	const handleChangeTab = (key) => {
		setActiveKey(key);
		swiper.slideTo(tabKeys.findIndex((t) => t === key));
	};

	return (
		<Modal
			visible={visible}
			onCancel={close}
			destroyOnClose
			centered
			footer={null}
			style={{ width: '500px' }}
		>
			<Tabs activeKey={activeKey} onChange={handleChangeTab}>
				<Tabs.TabPane tab='İstifadəçi adı və şifrə' key='login'></Tabs.TabPane>
				<Tabs.TabPane tab='ASAN Login' key='asan'></Tabs.TabPane>
			</Tabs>
			<Swiper
				onSwiper={setSwiper}
				activeId={activeKey === 'login' ? 0 : 1}
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={(swiper) => {
					console.log('slide change', swiper);
				}}
			>
				<SwiperSlide isActive={activeKey === 'login'}>
					<>
						<Formik
							initialValues={{ email: '', password: '' }}
							validationSchema={loginSchema}
							onSubmit={(value) => console.log(value)}
						>
							{({
								values,
								errors,
								touched,
								handleChange,
								handleBlur,
								isSubmitting,
								isValid,
							}) => (
								<Form>
									<Col span={24}>
										<TextField
											fullWidth
											type='text'
											name='email'
											label='Istifadəçi adı*'
											variant='standard'
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											helperText={touched.email && errors.email}
											error={!!errors.email}
										/>
									</Col>
									<Col span={24}>
										<TextField
											fullWidth
											name='password'
											label='Şifrə*'
											type='password'
											autoComplete='current-password'
											variant='standard'
											value={values.password}
											onChange={handleChange}
											onBlur={handleBlur}
											helperText={touched.password && errors.password}
											error={!!errors.password}
										/>
									</Col>
									<Button
										style={{ marginTop: '20px' }}
										variant='contained'
										htmlType='submit'
										type='primary'
										size='large'
										fullWidth
										block
										shape='circle'
										disabled={isSubmitting || !isValid}
									>
										Daxil ol
									</Button>
								</Form>
							)}
						</Formik>
						{/* TODO: remove div-s and custom styles, user antd components */}
						<div style={{ marginTop: '20px', textAlign: 'center' }}>
							<Link to='/forgot/password'>Şifrəni unutmusunuz?</Link>
						</div>
						<div style={{ marginTop: '20px', textAlign: 'center' }}>
							<Link to='/forgot/username'>İstifadəçi adını unutmusunuz?</Link>
						</div>
						<div style={{ marginTop: '20px', textAlign: 'center' }}>
							<Link to='/newPhoneNumber'>Mobil nömrəni yeniləmisiniz?</Link>
						</div>
					</>
				</SwiperSlide>
				<SwiperSlide isActive={activeKey === 'asan'}>
					{/* TODO: remove a tag, and use window.load method */}
					<a
						href='https://asanlogin.my.gov.az/auth?origin=https:%2F%2Fe-sosial.az%2F%23%2Fasanlogin'
						style={{
							marginTop: '20px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Button
							variant='contained'
							type='primary'
							size='large'
							shape='circle'
							fullWidth
							block
						>
							Davam et
						</Button>
					</a>
				</SwiperSlide>
			</Swiper>
		</Modal>
	);
};

export { AuthModal };
