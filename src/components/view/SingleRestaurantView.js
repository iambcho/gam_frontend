import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const AllRestaurantsView= (props) => {
		//destructuring from props 
		const { restaurants, currentRestaurantThunk } = props;
    return (
        <div className="container">
					<p>{restaurants.length}</p>
        </div>
    );
}


export default AllRestaurantsView;