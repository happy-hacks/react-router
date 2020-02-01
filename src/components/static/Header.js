import React from 'react';
import { Link } from 'react-router-dom';

export default ({ location }) => {
	console.log(location);

	return (
		<nav className="header">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/users">Users</Link>
		</nav>
	);
};
