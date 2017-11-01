import React from 'react';
import { Link } from 'react-router-dom';
import record_2e from '../assets/record_2e.png';

const Home = () => (
	<div className="row d-flex justify-content-center">
		<div className="col-sm-4 d-flex align-items-center">
			<div className="home-promo-block-cont">
				<div className="line">
					<p className="h4">
						Представительство
					</p>
				</div>
				<h1 className="font-weight-bold mb-4 text-nowrap">
					Балканкар РЕКОРД
				</h1>
				<p className="mb-4 home-promo-block-info">
				Новая линейка экологичных автопогрузчиков RECORD 2E. 
				Погрузчики данной серии воплощают в себе ряд новейших
				достижений компании Балканкар РЕКОРД. 
				</p>
				<Link to="/production" className="btn btn-danger">Подробнее</Link>
			</div>
		</div>
		<div className="col-sm-8">
			<img src={record_2e} className="img-fluid" alt="Автопогрузчик Balkancar Record 2E" />
		</div>
	</div>
);

export default Home;