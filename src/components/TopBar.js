import React from 'react';
import { NavLink } from 'react-router-dom';


const TopBar = () => (
	<div className="topbar-nav">
		<div className="nav navbar-dark bg-dark ">
			<NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Филиал: <span className="a--styled">г.Москва</span></NavLink>
			<NavLink activeClassName="active" className="nav-item nav-link" to="/about">+7 (495) 726-52-66</NavLink>
			<NavLink activeClassName="active" className="nav-item nav-link" to="/production">office@balkancar.com.ru</NavLink>
		</div>
	</div>
);

export default TopBar;