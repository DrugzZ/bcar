import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Categories from './Categories';
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
  	this.getData(this.props.match.params.group);  	

  }

  componentDidUpdate(prevProps) {
	if (this.props.match.params.group !== prevProps.match.params.group) {      
		this.getData(this.props.match.params.group);
	}
  }

  getData(group) {
	const cached = localStorage.getItem(group.replace('-', ' '));
	    if (cached) {
	      this.setState({ data: JSON.parse(cached), isLoading: false});
	      return;
	    }

	let machRef = db.collection("machines").doc("groups").collection("subgroups").where("childOf", "==", group.replace('-', ' '));

	machRef.get()
		.then(function(querySnapshot) {
			let docs = [];
        	querySnapshot.forEach(doc => {
				docs.push(doc.data())
			})
			localStorage.setItem(group.replace('-', ' '), JSON.stringify(docs))
			this.setState({data: docs, isLoading: false});
    	}.bind(this))
		.catch(error => this.setState({error, isLoading: false}));  	
  }


  render() {
  		const {match, data} = this.props;

  		if(this.state.isLoading) 
  			return <p className="text-dark">Loading...</p>

		return (
			<div className="wrap text-dark">
				<ProdSubMenu match={match} data={data}/>
					<Route path={`${match.path}/:subgroup`} render={(props) => (<ProdCategory {...props} data={this.state.data} />) }/>
					<Route exact path={`${match.path}`} render={(props) => (<Categories {...props} data={this.state.data} />) }/>
			</div>
		)	
	}
}

export default Production;

