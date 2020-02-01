import React, { useState } from 'react';
import '../../sass/App.scss';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default () => {
	const [location, setLocation] = useState('');

	return (
		<div className="App">
			<Router>
				<Header location={location} />
				<Routes setLocation={setLocation} />
				<Footer />
			</Router>
		</div>
	);
};

const Routes = ({ setLocation }) => {
	const location = useLocation();
	setLocation(location);

	return (
		<TransitionGroup className="page">
			<CSSTransition key={location.key} classNames="fade" timeout={500}>
				<Switch location={location}>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/Users" component={User} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
};

const Home = () => {
	return <h2 className="main blue">Home</h2>;
};

const User = () => {
	return <h2 className="main green">User</h2>;
};

const About = () => {
	return <h2 className="main red">About</h2>;
};
