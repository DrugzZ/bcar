import React from 'react';
import logo from '../assets/logo2.svg';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<div className="nav bg-warning">
			<NavLink exact activeClassName="active" className="nav-item nav-link text-dark" to="/">Главная</NavLink>
					<NavLink activeClassName="active" className="nav-item nav-link text-dark" to="/about">О нас</NavLink>
					<NavLink activeClassName="active" className="nav-item nav-link text-dark" to="/production">Продукция</NavLink>

		</div>
		<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
			<Link exact className="navbar-brand" to="/"> 
				<img src={logo} className="App-logo" alt="logo" />
				balkancar
			</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
				<div className="navbar-nav">
					<NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Главная</NavLink>
					<NavLink activeClassName="active" className="nav-item nav-link" to="/about">О нас</NavLink>
					<NavLink activeClassName="active" className="nav-item nav-link" to="/production">Продукция</NavLink>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;