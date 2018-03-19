import React, {Component} from 'react';
import { db } from '../fb';

import Categories from './Categories';

class ProdCategories extends Component {
	constructor(props) {
    super(props);

  }



  render() { 
		return (
			<div className="container">
			{this.props.isLoading ? '' : <Categories data={this.props.data}  isLoading={this.props.isLoading} match={this.props.match}/>}
			</div>
		)	
	}
}

export default ProdCategories;