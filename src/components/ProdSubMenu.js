import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const ProdSubMenu = (props) => (
	<div className="container-fluid px-0 bg-white mb-5 submenu">
		<ul className="nav justify-content-center text-uppercase">
			{props.data.types.map((type, index) => <li key={index} className="nav-item">
			    	<NavLink activeClassName="submenu--active" className="nav-link py-4" to={`/${type.replace(' ', '-').toLowerCase()}`}>{type}</NavLink>
			</li>)}
		</ul>
	</div>
);



export default ProdSubMenu;