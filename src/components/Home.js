import React from 'react';
import { Link } from 'react-router-dom';
import record_2e from '../assets/record_2e.png';

const Home = () => (
	<div className="wrap">
		<section className="home-promo-block d-flex align-items-center text-left container-fluid">
			<div className="row d-flex justify-content-center">
				<div className="col-sm-4 d-flex align-items-center">
					<div className="home-promo-block-cont ml-md-5">
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
		</section>
		<section className="home-partners-block">
			<div className="container">
				<div className="home-partners-block-heading pt-5 pb-3">
					<h3>Продукция</h3>
					<p className="text-muted">Мы предлгаеам продукцию следующих производителей</p>
				</div>
				<div className="row">
					<div className="col-md-3 home-partners-single">
						<div className="home-partners-single-img mb-2">

						</div>
						<p className="home-partners-single-txt">Балканкар РЕКОРД</p>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default Home;