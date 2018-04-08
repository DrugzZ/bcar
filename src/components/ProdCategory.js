import React, {Component} from 'react';
import { db } from '../fb';
import { Route, NavLink } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import IconButton from 'material-ui/IconButton';
import {ChevronLeft, ChevronRight} from 'mdi-material-ui'
import ToTop from './ToTop';
import ProdSpecs from './ProdSpecs';
import ReactSwipe from 'react-swipe';

class ProdCategory extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: {},
        isLoading: true,
        error: null,
    };
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
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

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  render() {

  		if(this.state.isLoading)
  			return <p>Loading...</p>

  		const data = this.state.data

		const subgroup = this.props.data.filter(subgroup => subgroup.title === this.props.match.params.subgroup);
		const images = subgroup[0].images;
		
		return (
			<div className="container pb-5">
				<ToTop />
				<div>
					<div className="row justify-content-center">
						<div className="col-md-6 bg-white mb-5 subgroup--picframe">
							<ReactSwipe ref="reactSwipe" className="carousel" swipeOptions={{continuous: false}}>
				                {images.map((image, index) =>
				                	<div key={index}>
					                	<Image 
											cloudName="bcar" 
											publicId={image}
											width="auto" 
											responsive={true}
											responsive_placeholder="blank"
											height="500"
											crop="pad"
											quality="70"
											background="white" 
											fetchFormat="auto" 
											className="img-fluid p-5"
										/>
									</div>
								)}
				            </ReactSwipe>
				            <IconButton onClick={this.prev} aria-label="Previous">
						        <ChevronLeft />
						    </IconButton>
						    <IconButton onClick={this.next} aria-label="Next">
						        <ChevronRight style={{ fontSize: 36 }}/>
						    </IconButton>
						</div>
					</div>
				</div>
					<nav className="d-flex justify-content-md-center text-uppercase subgroup--submenu">
						{data.map((mach, index) => {
							const first = (index === 0) ? '' : ('/' + mach.model);
							return <NavLink key={index} activeClassName="subgroup--active d-inline-block" className="py-2 px-3" exact replace to={this.props.match.url + first}>{mach.model}</NavLink>
						})}
					</nav>
				<Route exact path={`${this.props.match.path}`}  component={props => (<ProdSpecs {...props} data={data}/>)}/>
				<Route path={`${this.props.match.path}/:model`}  component={props => (<ProdSpecs {...props} data={data}/>)}/>
			</div>
		)	
	}
}

export default ProdCategory;