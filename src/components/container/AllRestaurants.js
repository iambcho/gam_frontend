import React, { Component } from 'react';
import './../../App.css';

// Import view;
import AllRestaurantsView from "../view/AllRestaurantsView";

// This import is needed to connect our AllStudents Component to the store;
// enabling us to use the state and the functionality provided by the
// students.js file located in our store
import { connect } from "react-redux";

class AllRestaurants extends Component {
    // componentDidMount() {
    //     this.props.fetchAllStudents();
    // }

    render() {
        return (
            <AllRestaurantsView/>
        )
    }
}

export default AllRestaurants;