import React from 'react';
import { NavLink } from 'react-router-dom';


const TopBar = () => (
	<div className="topbar-nav">
		<div className="nav bg-warning">
			<NavLink exact activeClassName="active" className="nav-item nav-link text-dark" to="/">Главная</NavLink>
			<NavLink activeClassName="active" className="nav-item nav-link text-dark" to="/about">О нас</NavLink>
			<NavLink activeClassName="active" className="nav-item nav-link text-dark" to="/production">Продукция</NavLink>

		</div>
	</div>
);

export default TopBar;