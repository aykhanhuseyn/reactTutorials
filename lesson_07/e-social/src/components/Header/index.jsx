import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Space } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import logo from '../../assets/images/logo.png';
import style from './header.module.scss';

const navs = [
	{
		key: 'home',
		name: 'Home',
		route: '/',
	},
	{
		key: 'cabinet',
		name: 'Personal cabinet',
		route: '/cabinet',
	},
	{
		key: 'idea-bank',
		name: 'Idea Bank',
		route: '/idea-bank',
	},
	{
		key: 'e-services',
		name: 'eServices',
		route: '/e-services',
	},
	{
		key: 'about',
		name: 'About',
		route: '/about',
	},
	{
		key: 'faq',
		name: 'FAQ',
		route: '/faq',
	},
	{
		key: 'help',
		name: 'Help',
		route: '/help',
	},
];

const Header = () => {
	return (
		<header className={style._header}>
			<section className={style._head}>
				<Link className={style._logo} to='/'>
					<div className={style._logo__wrapper}>
						<img src={logo} alt='eSocial Logo' />
					</div>
					<span className={style._logo__text}>e-social</span>
				</Link>
				<a className={style._call} href='tel:994120000142' title='call us'>
					<PhoneOutlined color='white' />
					<span color='white'>142</span>
				</a>
				<Space className={style._actions} size={10}>
					<Button type='ghost' shape='round' style={{ color: 'white' }}>
						Register
					</Button>
					<Button type='ghost' shape='round' style={{ color: 'white' }}>
						Log in
					</Button>
				</Space>
			</section>
			<nav className={style._nav}>
				<Space>
					{navs.map((nav) => (
						<NavLink key={nav.key} to={nav.route} activeClassName='active'>
							{nav.name}
						</NavLink>
					))}
				</Space>
			</nav>
		</header>
	);
};

export { Header };
