import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import header_img from '../assets/home_header_img.svg';
import header_img_thumb from '../assets/home_header_img_thumb.svg';
import header_img2 from '../assets/home_header_rt.svg';
import header_img2_thumb from '../assets/home_header_rt_thumb.svg';
import ProgressiveImage from "react-progressive-image";

const Home = () => (
	<div className="wrap">
		<section className="home-promo-block container pt-5">
			<div className="row d-flex align-items-end">
				<div className="col-md-6 text-left">
					<div className="home-promo-block-cont mb-5">
						<div className="line">
							<p className="h4">
								Представительство
							</p>
						</div>
						<h1 className="font-weight-bold mb-4">
							Балканкар РЕКОРД
						</h1>
					</div>
					<ProgressiveImage src={header_img} placeholder={header_img_thumb} >
						{(src) => <img src={src} alt="" className="img-responsive header_imga" />}
					</ProgressiveImage>
				</div>
				<div className="col-md-6 text-right">
					<ProgressiveImage src={header_img2} placeholder={header_img2_thumb} >
						{(src) => <img src={src} alt="" className="img-responsive header_imga2" />}
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