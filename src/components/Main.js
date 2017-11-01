import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Production from './Production';

const Main = () => (
	<main className="home-promo-block d-flex align-items-center text-left container-fluid">
	    <Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/production' component={Production}/>
	    </Switch>
	</main>
);

export default Main;