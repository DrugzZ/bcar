import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import { db } from '../fb';

class ProdCategories extends Component {
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
		return (
			<div className="container">
			{this.state.isLoading ? '' : this.state.data.map((subgroup, index) => <div key={index}><Link className="text-uppercase h3" to={`${this.props.match.url}/${subgroup.title}`}>{subgroup.childOf + ' record ' + subgroup.title}</Link><p>{subgroup.info}</p></div>)}
			</div>
		)	
	}
}

export default ProdCategories;