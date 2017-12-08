import React from 'react';
import { Link } from 'react-router-dom';
import { src as record_2e_img, trace as record_2e_trace} from '../assets/record_2e.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ProgressiveImage from 'react-progressive-image';

const Home = () => (
	<div className="wrap">
		<section className="home-promo-block d-flex align-items-center text-left container-fluid">
			<div className="row d-flex justify-content-center">
				<div className="col-md-6 d-flex align-items-center">
					<div className="home-promo-block-cont">
						<div className="line">
							<p className="h4">
								Представительство
							</p>
						</div>
						<h1 className="font-weight-bold mb-4">
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
				<div className="col-md-6">
					<ProgressiveImage src={record_2e_img} placeholder={record_2e_trace}>
						{(src) => <img src={src} className="img-fluid" alt="Автопогрузчик Balkancar Record 2E" />}
					</ProgressiveImage>
				</div>
			</div>
		</section>
		<section className="home-partners-block">
			<div className="container">
				<div className="home-partners-block-heading pt-5 pb-3">
					<h3>Продукция</h3>
					<p className="text-muted">Мы предлгаеам продукцию следующих производителей</p>
				</div>
				<Tabs selectedTabClassName="home-partners-single--selected">
				<TabList className="row">
					<Tab className="col-md-3 home-partners-single">
						<div className="home-partners-single-img mb-2">

						</div>
						<p className="home-partners-single-txt">Балканкар РЕКОРД</p>
					</Tab>
					<Tab className="col-md-3 home-partners-single">
						<div className="home-partners-single-img mb-2">

						</div>
						<p className="home-partners-single-txt">Элпром Троян</p>
					</Tab>
					<Tab className="col-md-3 home-partners-single">
						<div className="home-partners-single-img mb-2">

						</div>
						<p className="home-partners-single-txt">EnSol Technology</p>
					</Tab>
					<Tab className="col-md-3 home-partners-single">
						<div className="home-partners-single-img mb-2">

						</div>
						<p className="home-partners-single-txt">Элхим-Искра</p>
					</Tab>
				</TabList>
				<div className="row">
					<TabPanel className="col-sm-12">
						<p className="home-partners-single-content">
						<a href="" className="a--styled">"Балканкар Рекорд" АО</a> ведущий производитель&nbsp;
						<Link to="/production" className="a--styled">автопогрузчиков</Link>,&nbsp;
						<Link to="/production" className="a--styled">электропогрузчиков</Link>,&nbsp;
						<Link to="/production" className="a--styled">электротележек</Link>,&nbsp;
						<Link to="/production" className="a--styled">тягачей</Link>.
						Завод находится в г. Пловдив, Болгария. Качество предоставляемых компанией услуг и продукции 
						подтверждено сертификатами ISO 9001, AQAP 2110 и Сертификатом соответствия по требованиям 
						таможенного союза России, Беларусь и Казахстан.
						</p>
					</TabPanel>
					<TabPanel className="col-sm-12">
						<p className="home-partners-single-content">Элпром Троян</p>
					</TabPanel>
					<TabPanel className="col-sm-12">
						<p className="home-partners-single-content">EnSol Technology</p>
					</TabPanel>
					<TabPanel className="col-sm-12">
						<p className="home-partners-single-content">Элхим-Искра</p>
					</TabPanel>
				</div>
				</Tabs>
			</div>
		</section>
	</div>
);

export default Home;