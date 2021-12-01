import React, { FunctionComponent } from 'react';

interface ILayoutProps {
	children: React.ReactNode;
}
const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default Layout;
