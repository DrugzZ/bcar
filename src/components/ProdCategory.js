import React, {Component} from 'react';
import { db } from '../fb';
import { Route, NavLink } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import ReactSwipe from 'react-swipe';

class ProdCategory extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: {},
        isLoading: true,
        error: null,
    };
    this.capFirst = this.capFirst.bind(this)
  }

  componentDidMount() {
	const cached = localStorage.getItem(this.props.match.params.subgroup);
    if (cached) {
      this.setState({ data: JSON.parse(cached), isLoading: false });
      return;
    }

	let machRef = db.collection("machines").where("subgroup", "==", this.props.match.params.subgroup);

	machRef.get()
		.then(function(querySnapshot) {
			let docs = [];
        	querySnapshot.forEach(doc => {
				docs.push(doc.data())
			})
			localStorage.setItem(this.props.match.params.subgroup, JSON.stringify(docs))
			this.setState({data: docs, isLoading: false});
    	}.bind(this))
		.catch(error => this.setState({error, isLoading: false}));
  }

  capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {

  		if(this.state.isLoading || this.props.isLoading)
  			return ''

  		const data = this.state.data

		const subgroup = this.props.data.filter(subgroup => subgroup.title === this.props.match.params.subgroup);
		const images = subgroup[0].images;
		
		return (
			<div className="container pb-5">
				<div>
					<div className="row justify-content-center">
						<div className="col-md-6 bg-white mb-5 subgroup--picframe">
							<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
				                {images.map((image, index) =>
				                	<div>
					                	<Image 
											cloudName="bcar" 
											publicId={image}
											width="700"
											crop="scale" 
											fetchFormat="auto" 
											className="img-fluid p-5"
										/>
									</div>
								)}
				            </ReactSwipe>
						</div>
					</div>
				</div>
				<div className="px-0 subgroup--submenu">
					<ul className="nav justify-content-center text-uppercase">
						{data.map((mach, index) => {
							const first = (index === 0) ? '' : ('/' + mach.model);
							return <li key={index} className="nav-item"><NavLink activeClassName="subgroup--active" className="nav-link p4" exact replace to={this.props.match.url + first}>{mach.model}</NavLink></li>
						})}
					</ul>
				</div>
				{data.map((mach, index) => {
					const first = (index === 0) ? '' : ('/' + mach.model);
					const exact = (index === 0) ? true : false;
					return <Route key={index} exact={exact} path={this.props.match.path + first} render={() => 
						<div className="bg-white px-5 py-5 b-sh row">
						<h3 className="mb-4">{`${this.capFirst(mach.type)} ${mach.model.toUpperCase()}`}</h3>
						<div className="row">
							{mach.specs.map((spec) => 
								<div key={spec.orderNum} className="col-md-4">
									<p className="h5 my-3">{this.capFirst(spec.group)}</p>
									{spec.values.map((value, index) =>
										<div key={index} className="pl-2 my-2">
										<p className="h6">{value.name}</p>
										<p className="simple-txt pl-2 m-0">{`${value.value} ${value.unit ? value.unit : ''}`}</p>
										</div>)}
								</div>)}
							
						</div>
						</div>}
					/>
				})}

			</div>
		)	
	}
}

export default ProdCategory;