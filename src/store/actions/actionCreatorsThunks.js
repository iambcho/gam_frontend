import * as types from './actionTypes';
// import { bindActionCreators } from 'redux';
import axios from 'axios';

//TEMPORARY DUMMY DATABASE FOR FRONTEND
let arrayOfRestaurantsFromAPI = [
		{
			"name": "Don Pedro's",
			"hasFood": true,
			"foodPrice": 10,
			"foodAmount": 100,
			"hasCoffee": true,
			"coffeePrice": 3,
			"coffeeAmount": 0,
			"hasDessert": true,
			"dessertPrice": 5,
			"dessertAmount": 0,
			"address": "43 Post St, San Jose, CA 95113",
			"zipcode": "95113",
			"restaurantImage": "profile-picture.svg",
			"cuisine": "Mexican",
			"donateTo": "Hospital",
			"restaurantId": 1
			
		},
		{
			"name": "Tea Alley",
			"hasFood": false,
			"foodPrice": 10,
			"foodAmount": 0,
			"hasCoffee": true,
			"coffeePrice": 10,
			"coffeeAmount": 100,
			"hasDessert": true,
			"dessertPrice": 10,
			"dessertAmount": 0,
			"address": "40 S 1st St, San Jose, CA 95113",
			"zipcode": "95113",
			"restaurantImage": "profile-picture2.svg",
			"cuisine": "Bubble Tea",
			"donateTo": "Hospital",
			"restaurantId": 2
			
		},
		{
			"name": "Back A Yard Caribbean Grill",
			"hasFood": true,
			"foodPrice": 10,
			"foodAmount": 0,
			"hasCoffee": false,
			"coffeePrice": 10,
			"coffeeAmount": 0,
			"hasDessert": true,
			"dessertPrice": 10,
			"dessertAmount": 100,
			"address": "80 N Market St, San Jose, CA 95113",
			"zipcode": "95113",
			"restaurantImage": "profile-picture3.svg",
			"cuisine": "Caribbean",
			"donateTo": "Shelter",
			"restaurantId": 3
			
		},
		{
			"name": "Test Name4",
			"hasFood": true,
			"foodPrice": 10,
			"hasCoffee": true,
			"coffeePrice": 10,
			"hasDessert": true,
			"dessertPrice": 10,
			"address": "100 N Market St, San Jose, CA 95113",
			"zipcode": "95113",
			"restaurantImage": "profile-picture.svg",
			"cuisine": "Mexican",
			"restaurantId": 4
			
		}

]

/****************************** ACTION CREATOR ***************************/

//RESTAURANTS ---------
const fetchRestaurants = (all_restaurants) => {
		return{
				type: types.FETCH_RESTAURANTS,
				payload: all_restaurants
		}
}

const currentRestaurant = (restaurant) => {
		return {
				type: types.CURRENT_RESTAURANT,
				payload: restaurant
		}
}

const currentZipcode = (zipcode) => {
		return {
				type: types.CURRENT_ZIPCODE,
				payload: zipcode
		}
}



//-----------------------------------------------------------------------------

//******************************** THUNKS *************************************
// For All thunks we first modify/access the databse and then update the front end
// with a dispatch 

export const fetchRestaurantsThunk = () => (dispatch) => {
	//this needs to be changed depending on backend
	axios.get('http://184.172.247.241:31337/api/restaurants')
	.then((response) =>{
			dispatch(fetchRestaurants(response.data));
	})
	.then((error)=>{
			console.log(error);
	});
	// console.log("fetch restaurants thunk");

	// dispatch(fetchRestaurants(arrayOfRestaurantsFromAPI))
	
}

export const currentRestaurantThunk = (restaurant) => (dispatch) => {
	console.log(restaurant)	
	dispatch(currentRestaurant(restaurant));
}

export const currentZipcodeThunk = (zipcode) => (dispatch) => {
	console.log(zipcode)	
	dispatch(currentZipcode(zipcode));
}





