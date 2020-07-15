import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const AllRestaurantsView= (props) => {
		//destructuring from props 
		const { restaurants, restaurant, currentRestaurantThunk } = props;

    return (
        <div className="container">
					<p>{restaurants.length}</p>
					<p>{restaurant.restaurantId}</p>

        </div>
    );
}


export default AllRestaurantsView;