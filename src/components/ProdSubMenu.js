import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { db } from '../fb';

class ProdSubMenu extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: {},
        isLoading: true,
        error: null,
    };
  }

  componentDidMount() {  	
	const cached = localStorage.getItem('cached');
    if (cached) {
      this.setState({ data: JSON.parse(cached), isLoading: false });
      return;
    }

	let groupsRef = db.collection("machines").doc("groups");

	groupsRef.get().then(doc => {
		localStorage.setItem('cached', JSON.stringify(doc.data()))
		this.setState({data: doc.data(), isLoading: false});
		})
	.catch(error => this.setState({error, isLoading: false}));
  }

  render() { 
		return (
			<ul className="nav justify-content-center bg-dark">
				{this.state.isLoading ? '' : this.state.data.types.map((type, index) => <li key={index} className="nav-item">
			    	<Link className="nav-link" to={`${this.props.match.url}/${type.replace(' ', '-').toLowerCase()}`}>{type}</Link>
			  	</li>)}
			</ul>
		)	
	}
}

export default ProdSubMenu;