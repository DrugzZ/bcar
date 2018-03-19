import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import HeightIcon from '../assets/heightIcon.svg'
import WeightIcon from '../assets/weightIcon.svg'

function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Categories = ({data, match, isLoading}) => (
	<ul className="list-unstyled">
		{isLoading ? '' : data.map((subgroup, index) => 
			<li key={index} className="bg-white Categories--single-cat py-4 mb-4">
				<div className="row">
				<div className="col-md-4">
				<Image 
					cloudName="bcar" 
					publicId={subgroup.images[0]} 
					width="auto" 
					responsive="true"
					responsive_placeholder="blank"
					crop="scale" 
					fetchFormat="auto" 
					className="img-fluid px-3 mb-2"
				/>
				</div>
				<div className="col-md-8 px-5">
				<Link 
					className="h3" 
					to={`${match.url}/${subgroup.title}`}
					>
					{capFirst(subgroup.childOf) + ' RECORD ' + subgroup.title.toUpperCase()}
				</Link>
				<span className="Categories--specs d-flex mt-2 mb-4 align-items-end">
					<img src={WeightIcon} />
					<span className="h3 m-0 px-2">1250-2500</span>
					<img className="ml-3" src={HeightIcon} />
					<span className="h3 m-0 px-2">3000-6400</span>
				</span>
				<p>{subgroup.info}</p>
				</div>
				</div>
			</li>
			)
		}
	</ul>
);

export default Categories;

