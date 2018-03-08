import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProdCategories from './ProdCategories';
import ProdCategory from './ProdCategory';
import ProdSubMenu from './ProdSubMenu'

const Production = ({ match }) => (
	<div className="wrap text-dark">
	<div className="container">
		<ProdSubMenu match={match}/>
	</div>
		<Switch>
			<Route path={`${match.path}/:group/:subgroup`} component={ProdCategory}/>
			<Route path={`${match.path}/:group`} component={(props) => (<ProdCategories {...props}/>) }/>
		</Switch>

	</div>
);

export default Production;