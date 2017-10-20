import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Production from './Production';

const Main = () => (
	<main>
	    <Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/about' component={About}/>
			<Route path='/production' component={Production}/>
	    </Switch>
	</main>
);

export default Main;