import React from 'react';
import { Link } from 'react-router-dom';
import record_2e from '../assets/record_2e.png';

const Home = () => (
	<div className="home-promo-block d-flex align-items-center text-left">
		<div className="container">
			<div className="row">
				<div className="col-md-4 d-flex align-items-center">
					<div className="promo-block-info">
					<div className="line">
						<p className="h4">
							Представительство
						</p>
					</div>
					<h1 className="font-weight-bold mb-4">
						Балканкар РЕКОРД
					</h1>
					<p className="text-nowrap lead mb-4">
					Новая линейка экологичных автопогрузчиков RECORD 2E. 
					<br />Погрузчики данной серии воплощают в себе ряд новейших
					<br /> достижений компании Балканкар РЕКОРД. 
					</p>
					<Link to="/production" className="btn btn-danger">Подробнее</Link>
					</div>
				</div>
				<div className="col-md-8">
					<img src={record_2e} className="img-fluid" alt="Автопогрузчик Balkancar Record 2E" />
				</div>
			</div>
		</div>
	</div>
);

export default Home;