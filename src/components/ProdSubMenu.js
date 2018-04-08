import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

const ProdSubMenu = (props) => (
	<nav className="bg-white mb-5 submenu text-uppercase d-flex justify-content-md-center">
			{props.data.types.map((type, index) => 
			    	<NavLink key={index} activeClassName="submenu--active" className="d-inline-block py-4" to={`/${type.replace(' ', '-').toLowerCase()}`}>{type}</NavLink>)}
	</nav>
);



export default ProdSubMenu;