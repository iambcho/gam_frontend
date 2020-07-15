/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */
import React, { Component } from 'react';
import './../../App.css';

import AllCampusesView from "./../view/AllCampusesView";

import { connect } from "react-redux";
import { fetchCampusesThunk } from "./../../store/utilities/campuses";
import { currCampusThunk } from "./../../store/utilities/campus";
import { removeCampusThunk } from "./../../store/utilities/campuses";

class AllCampuses extends Component {
    componentDidMount() {
        this.props.fetchAllCampuses();
    }

    render() {
        return (
            <AllCampusesView campuses = {this.props.campuses} campus = {this.props.campus} getCurrentCampus={this.props.getCurrentCampus} removeCampus={this.props.removeCampus}/>
        )
    }
}

const mapState = (state) => {
    return {
        campuses: state.campuses,
        currCampus: state.campus
    }
}

const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
        getCurrentCampus: (campus) => dispatch(currCampusThunk(campus)),
        removeCampus: (id) => dispatch(removeCampusThunk(id))
    }
}

export default connect(mapState, mapDispatch)(AllCampuses);