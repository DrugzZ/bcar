import React from 'react';
import logo from '../assets/logo2.svg';
import { Link, NavLink } from 'react-router-dom';

function ToggleBtn() {
  function handleClick(e) {
    e.preventDefault();
    let btn = document.getElementById("navbarNav");
    btn.classList.toggle("show");
  }

  return (
    <button className="navbar-toggler" type="button" onClick={handleClick} aria-label="Навигация">
		<span className="navbar-toggler-icon"></span>
	</button>
  );
}

const Header = () => (
	<header className="sticky-top">
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link exact className="navbar-brand" to="/"> 
				<img src={logo} className="App-logo" alt="logo" />
				balkancar
			</Link>
			<ToggleBtn />
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