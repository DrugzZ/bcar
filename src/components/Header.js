import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';


const Header = () => (
	<div className="App-header">
    	<img src={logo} className="App-logo" alt="logo" />
    	<h1 className="App-title">Welcome to React</h1>
    	<ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/production">Topics</Link></li>
      	</ul>
    </div>
);

export default Header;