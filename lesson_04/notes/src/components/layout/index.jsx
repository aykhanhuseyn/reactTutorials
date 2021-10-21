import React from 'react';
import { Header } from './header';
import { Footer } from './footer';
import style from './layout.module.css';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className={style._main}>{children}</main>
			<Footer />
		</>
	);
};

export { Layout };
