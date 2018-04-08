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
			<Link className="navbar-brand" to="/"> 
				<img src={logo} className="App-logo" alt="logo" />
			</Link>
			<ToggleBtn />
			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<div className="navbar-nav flex-column">
					<div className="topbar-nav">
					<p className="d-inline-block">Филиал: <span className="a--styled">г.Москва</span></p>
			        <p className="d-inline-block">+7 (495) 726-52-66</p>
			        <p className="d-inline-block">office@balkancar.com.ru</p>
					</div>
					<div className="d-flex justify-content-end">
					<NavLink exact activeClassName="active" className="nav-link d-inline-block " to="/">Главная</NavLink>
					<NavLink activeClassName="active" className="nav-link d-inline-block" to="/about">О нас</NavLink>
					<NavLink activeClassName="active" className="nav-link d-inline-block" to="/продукция">Продукция</NavLink>
					</div>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;