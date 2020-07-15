import React, { Component } from 'react';
import './../../App.css';

// Import view;
import ConfirmationView from "./../view/ConfirmationView";


class Confirmation extends Component {
    // componentDidMount() {
    //     this.props.fetchAllStudents();
    // }

    render() {
        return (
            <ConfirmationView/>
        )
    }
}

export default Confirmation;