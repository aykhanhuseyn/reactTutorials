import React from 'react';
import style from './layout.module.css';

const Footer = () => {
	return (
		<footer className={style._footer}>&copy; {new Date().getFullYear()}</footer>
	);
};

export { Footer };
