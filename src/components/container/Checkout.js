import React, { Component } from 'react';
import './../../App.css';

// Import view;
import CheckoutView from "./../view/CheckoutView";

class Checkout extends Component {
    // componentDidMount() {
    //     this.props.fetchAllStudents();
    // }

    render() {
        return (
            <CheckoutView/>
        )
    }
}

export default Checkout;