import React, { Component } from 'react';
import './../../App.css';

// Import view;
import CheckoutView from "./../view/CheckoutView";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { fetchRestaurantsThunk, currentRestaurantThunk } from '../../store/actions/actionCreatorsThunks';



class Checkout extends Component {
    // componentDidMount() {
    //     this.props.fetchAllStudents();
    // }

    render() {
        return (
            <CheckoutView
						restaurants={this.props.restaurants}
						restaurant={this.props.restaurant}
						currentRestaurantThunk={this.props.currentRestaurantThunk}
						/>
        )
    }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
	return ({
		restaurants: state.allRestaurants,
		restaurant: state.currentRestaurant
	})
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators 
// or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
	return {
		fetchRestaurantsThunk: () => dispatch(fetchRestaurantsThunk()),
		currentRestaurantThunk: (restaurantId) => dispatch(currentRestaurantThunk(restaurantId))
	}
}

//allows us to connect to the store and get the needed objects/state
export default withRouter(connect(mapState, mapDispatch)(Checkout));

