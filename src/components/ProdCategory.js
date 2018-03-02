import React, {Component} from 'react';
import { db } from '../fb';

class ProdCategory extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: {},
        isLoading: true,
        error: null,
    };
  }

  componentDidMount() {
	const cached = localStorage.getItem(this.props.match.params.groupName.replace('-', ' '));
    if (cached) {
      this.setState({ data: JSON.parse(cached), isLoading: false });
      return;
    }

	let machRef = db.collection("machines").where("group", "==", this.props.match.params.groupName.replace('-', ' '));

	machRef.get()
		.then(function(querySnapshot) {
			let docs = [];
        	querySnapshot.forEach(doc => {
				docs.push(doc.data())
			})
			localStorage.setItem(this.props.match.params.groupName.replace('-', ' '), JSON.stringify(docs))
			this.setState({data: docs, isLoading: false});
    	}.bind(this))
		.catch(error => this.setState({error, isLoading: false}));
  }

  render() { 
		return (
			<div className="text-dark">
				<h3>{this.state.isLoading ? '' : this.state.data.map((mach, index) => <p key={index}>{mach.model.toUpperCase()}</p>)}</h3>
			</div>
		)	
	}
}

export default ProdCategory;