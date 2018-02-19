import React from 'react';
import { Link } from 'react-router-dom';
import headingFont from '../assets/ALSMeringue.otf';

const Home = () => (
	<div className="wrap">
		<section className="container-fluid">
			<div className="row">
				<div className="col-md-6 s1-wrap py-5 pl-5">
					<ul className="list-unstyled">
					  <p className="h2">Подъемно-транспортное оборудование</p>
					  <li><Link className="h5" to="/production">Автопогрузчики</Link></li>
					  <li><Link className="h5" to="/production">Электропогрузчики</Link></li>
					  <li><Link className="h5" to="/production">Платформенные тележки</Link></li>
					  <li><Link className="h5" to="/production">Электросамосвалы</Link></li>
					  <li><Link className="h5" to="/production">Тягачи</Link></li>
					</ul>
				</div>
				<div className="col-md-6 s2-wrap py-5 pl-5">
					<ul className="list-unstyled">
					  <li className="h2">Тельферы</li>
					  <li>Consectetur adipiscing elit</li>
					  <li>Integer molestie lorem at massa</li>
					  <li>Facilisis in pretium nisl aliquet</li>
					  <li>Faucibus porta lacus fringilla vel</li>
					  <li>Aenean sit amet erat nunc</li>
					  <li>Eget porttitor lorem</li>
					</ul>
				</div>
			</div>
		</section>
		<section className="container-fluid">
			<div className="row">
				<div className="col-md-6 s3-wrap py-5 pl-5">
					<ul className="list-unstyled">
					  <li className="h2">Тяговые аккумуляторные батареи</li>
					  <li>Consectetur adipiscing elit</li>
					  <li>Integer molestie lorem at massa</li>
					  <li>Facilisis in pretium nisl aliquet</li>
					  <li>Faucibus porta lacus fringilla vel</li>
					  <li>Aenean sit amet erat nunc</li>
					  <li>Eget porttitor lorem</li>
					</ul>
				</div>
				<div className="col-md-6 s4-wrap py-5 pl-5">
					<ul className="list-unstyled">
					  <li className="h2">Электродвигатели</li>
					  <li>Consectetur adipiscing elit</li>
					  <li>Integer molestie lorem at massa</li>
					  <li>Facilisis in pretium nisl aliquet</li>
					  <li>Faucibus porta lacus fringilla vel</li>
					  <li>Aenean sit amet erat nunc</li>
					  <li>Eget porttitor lorem</li>
					</ul>
				</div>
			</div>
		</section>
		<section className="container-fluid">
			<div className="row">
				<div className="col-md-6 s5-wrap py-5 pl-5">
					<ul className="list-unstyled">
					  <li className="h2">Зарядные устройства</li>
					  <li>Consectetur adipiscing elit</li>
					  <li>Integer molestie lorem at massa</li>
					  <li>Facilisis in pretium nisl aliquet</li>
					  <li>Faucibus porta lacus fringilla vel</li>
					  <li>Aenean sit amet erat nunc</li>
					  <li>Eget porttitor lorem</li>
					</ul>
				</div>
				<div className="col-md-6 s6-wrap py-5 pl-5">
					<ul className="list-unstyled">
					  <li className="h2">Запасные части</li>
					  <li>Consectetur adipiscing elit</li>
					  <li>Integer molestie lorem at massa</li>
					  <li>Facilisis in pretium nisl aliquet</li>
					  <li>Faucibus porta lacus fringilla vel</li>
					  <li>Aenean sit amet erat nunc</li>
					  <li>Eget porttitor lorem</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
);

export default Home;