import React, { Component } from 'react';
import './../../App.css';

// Import view;
import AllRestaurantsView from "../view/AllRestaurantsView";

// This import is needed to connect our AllStudents Component to the store;
// enabling us to use the state and the functionality provided by the
// students.js file located in our store
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { fetchRestaurantsThunk, currentRestaurantThunk } from '../../store/actions/actionCreatorsThunks';


class AllRestaurants extends Component {
	componentDidMount() {
		this.props.fetchRestaurantsThunk();
	}

	render() {
		return (
			//we pass the state into this component, so we can actually load all the restaurants

			<AllRestaurantsView restaurants={this.props.restaurants} />

		)
	}
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
	return ({
		restaurants: state.allRestaurants,
	})
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators 
// or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
	return {
		fetchRestaurantsThunk: () => dispatch(fetchRestaurantsThunk())
	}
}

//allows us to connect to the store and get the needed objects/state
export default withRouter(connect(mapState, mapDispatch)(AllRestaurants));