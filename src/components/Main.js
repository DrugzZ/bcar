import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Production from './Production';

const Main = ({data, isLoading, error}) => (
	<main>
	    <Switch>
			<Route exact path='/' component={props => (<Home {...props} data={data} isLoading={isLoading} error={error} />)}/>
			<Route path='/:group' component={props => (<Production {...props} data={data} isLoading={isLoading} error={error} />)}/>
			<Route path='/about' component={About}/>
	    </Switch>
	</main>
);

export default Main;