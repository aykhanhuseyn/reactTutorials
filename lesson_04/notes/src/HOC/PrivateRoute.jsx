import React from 'react';
import { Route } from 'react-router-dom';

const isAdmin = true;

const PrivateRoute = ({ user, ...rest }) => {
	if (isAdmin) {
		return <Route {...rest} />;
	}
	return <div>Hey, {user.name}! You are not authorized!</div>;
};

export { PrivateRoute };
