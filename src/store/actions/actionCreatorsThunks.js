import * as types from './actionTypes';
// import { bindActionCreators } from 'redux';
import axios from 'axios';

//TEMPORARY DUMMY DATABASE FOR FRONTEND
let arrayOfRestaurantsFromAPI = [
		{
			"name": "Don Pedro's",
			"hasFood": true,
			"foodPrice": 10,
			"foodAmount": 0,
			"hasCoffee": true,
			"coffeePrice": 3,
			"coffeeAmount": 100,
			"hasDessert": true,
			"dessertPrice": 5,
			"dessertAmount": 0,
			"address": "43 Post St, San Jose, CA 95113",
			"zipcode": 11111,
			"restaurantImage": "profile-picture.svg",
			"cuisine": "Mexican",
			"donateWhere": "Hospital",
			"restaurantId": 1
			
		},
		{
			"name": "Tea Alley",
			"hasFood": true,
			"foodPrice": 10,
			"hasCoffee": false,
			"coffeePrice": 10,
			"hasDessert": true,
			"dessertPrice": 10,
			"address": "40 S 1st St, San Jose, CA 95113",
			"zipcode": 11111,
			"restaurantImage": "profile-picture2.svg",
			"cuisine": "Bubble Tea",
			"restaurantId": 2
			
		},
		{
			"name": "Back A Yard Caribbean Grill",
			"hasFood": true,
			"foodPrice": 10,
			"hasCoffee": false,
			"coffeePrice": 10,
			"hasDessert": true,
			"dessertPrice": 10,
			"address": "80 N Market St, San Jose, CA 95113",
			"zipcode": 11111,
			"restaurantImage": "profile-picture3.svg",
			"cuisine": "Caribbean",
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
			"address": "Test Address4",
			"zipcode": 11111,
			"restaurantImage": "profile-picture.svg",
			"cuisine": "Mexican",
			"restaurantId": 4
			
		}

]

/****************************** ACTION CREATOR ***************************/
// //AUTH ---------
// const getUser = user => {
// 	return {
// 			type: types.GET_USER,
// 			payload: user
// 	}
// }
// const removeUser = () => {
// 	return {
// 			type: types.REMOVE_USER
// 	}
// }

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



//-----------------------------------------------------------------------------

//******************************** THUNKS *************************************
// For All thunks we first modify/access the databse and then update the front end
// with a dispatch 

//AUTH ----------

// export const me = () => async dispatch => {
//     try {
//         const res = await axios.get("/auth/me", { withCredentials: true});
//         console.log(res,"hellooooooo");
//         dispatch(getUser(res.data || {}));
//     }
//     catch(err) {
//         console.error(err);
//     }
// };

// //should put user ID stuff here
// export const auth = (username, password, method, history, id) => async dispatch => {
//     let res;
//     try {
//         res = await axios.post(`/auth/${method}`, { username, password }, { withCredentials: true });
//         history.push(`/study_session/${id}`);
//     }
//     catch (authError) {
//         return dispatch(getUser({ error: authError}));
//     }
//     try {
//         dispatch(getUser(res.data));
//     }
//     catch (dispatchOrHistoryErr) {
//         console.error(dispatchOrHistoryErr);
//     }
// };

// export const logout = () => async dispatch => {
//     try {
//         await axios.delete("/auth/logout", { withCredentials: true });
//         dispatch(removeUser());
//     }
//     catch (err) {
//         console.error(err);
//     }
// };


//SESSIONS ---------

/**This function takes @id, which is the id of the individual user that is logged on
 * and then it requests from the backend the sessions the user has.
 */
//VERSION FOR AUTH
// export const fetchSessionsThunk = (id) => (dispatch) => {
//     axios.get(`/api/studysessions/users/${id}`)
//     .then((response) =>{
//         dispatch(fetchSessions(response.data));
//     })
//     .then((error)=>{
//         console.log(error);
//     });    
// }

export const fetchRestaurantsThunk = () => (dispatch) => {
	// //this needs to be changed depending on backend
	// axios.get('http://localhost:1234/api/studysessions/users/1')
	// .then((response) =>{
	// 		dispatch(fetchRestaurants(response.data));
	// })
	// .then((error)=>{
	// 		console.log(error);
	// });
	console.log("fetch restaurants thunk");

	dispatch(fetchRestaurants(arrayOfRestaurantsFromAPI))
	
}

export const currentRestaurantThunk = (restaurant) => (dispatch) => {
	console.log(restaurant)	
	dispatch(currentRestaurant(restaurant));
}




