import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import ProdCategories from './ProdCategories';
import ProdCategory from './ProdCategory';
import ProdSubMenu from './ProdSubMenu';
import { db } from '../fb';


class Production extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: {},
        isLoading: true,
        error: null,
    };
  }

  componentDidMount() {  	
	const cached = localStorage.getItem(this.props.match.params.group.replace('-', ' '));
	    if (cached) {
	      this.setState({ data: JSON.parse(cached), isLoading: false});
	      return;
	    }

	let machRef = db.collection("machines").doc("groups").collection("subgroups").where("childOf", "==", this.props.match.params.group.replace('-', ' '));

	machRef.get()
		.then(function(querySnapshot) {
			let docs = [];
        	querySnapshot.forEach(doc => {
				docs.push(doc.data())
			})
			localStorage.setItem(this.props.match.params.group.replace('-', ' '), JSON.stringify(docs))
			this.setState({data: docs, isLoading: false});
    	}.bind(this))
		.catch(error => this.setState({error, isLoading: false}));
  }

  render() {
  		const {match, data, isLoading, error} = this.props; 
		return (
			<div className="wrap text-dark">
				<ProdSubMenu match={match} data={data} isLoading={isLoading} error={error}/>
				<Switch>
					<Route path={`${match.path}/:subgroup`} component={(props) => (<ProdCategory {...props} data={this.state.data} isLoading={this.state.isLoading} error={this.state.error}/>) }/>
					<Route path={`${match.path}`} render={(props) => (<ProdCategories {...props} data={this.state.data} isLoading={this.state.isLoading} error={this.state.error}/>) }/>
				</Switch>
			</div>
		)	
	}
}

export default Production;

