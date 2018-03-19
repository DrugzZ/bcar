import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './App.css';
import { db } from '../fb';

class App extends Component {
    constructor() {
      super();
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
  	const {data, isLoading, error} = this.state

    return (
    <div className="App">
        {isLoading
        	 ? ''
        	 : <div><Header /><Main data={data} isLoading={isLoading} error={error}/>
        	 	</div>
        }
    </div>
    );
  }
}

export default App;
