import React from 'react';
import logo from '../assets/logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
	<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
		<Link exact className="navbar-brand" to="/"> 
			<img src={logo} className="App-logo" alt="logo" />
		</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
			<div className="navbar-nav">
				<NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
				<NavLink activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
				<NavLink activeClassName="active" className="nav-item nav-link" to="/production">Production</NavLink>
			</div>
		</div>
	</nav>
);

export default Header;