import React from 'react';
import { Link } from 'react-router-dom';
import style from './layout.module.css';

const Header = () => {
	return (
		<header className={style._header}>
			<nav className={style._link__box}>
				<Link to='/' className={style._link__item}>
					Home
				</Link>
				<Link to='/list' className={style._link__item}>
					List
				</Link>
				<Link to='/create' className={style._link__item}>
					Create
				</Link>
			</nav>
			{/* avatar */}
		</header>
	);
};

export { Header };
