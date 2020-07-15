import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

const AllRestaurantsView= (props) => {
		//object destructuring that takes restaurants and any other things we add here from props
    const {restaurants} = props;

    const style = {
        color: 'white',
        textDecoration: 'none'
      }
    return (
        <div className="container">
            <div className= "nav-bar">
            <ul>
                <li><Link style = {style} to="/">Home</Link></li>
                <li><Link style = {style} to="/restaurants">Our Mission</Link></li>
            </ul>
          </div> 

          <div className="zip-input">
            <input placeholder='Enter zip code'></input>
            <button>Search</button><br/>
          </div>

          <div className="restaurant-card">
            <div>              
                <h1>Restaurant Name</h1>
                <p>Cuisine</p>
                <p>Address</p>
            </div>
            <div>
                <button>Meal</button>
            </div>
              
          </div>
        </div>
    );
}


export default AllRestaurantsView;