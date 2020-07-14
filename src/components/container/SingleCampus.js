/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */
import React, {Component} from "react";
import "./../../App.css";

//import view in order to render page
import SingleCampusView from "./../view/SingleCampusView";

//import connect to have mapState and mapDispatch
//be connected to instance of class
//thus SingleCampusContainer should have access
//to current student, edit current student function, and current student fetch
import {connect} from "react-redux";
import { currCampusThunk } from "./../../store/utilities/campus";
import {editCampusThunk} from "./../../store/utilities/campuses";

class SingleCampusContainer extends Component{
    componentDidMount=()=>{
        console.log("The Campus is: ", this.props.campus)
        this.props.getCurrentCampus(this.props.campus);
    }
    render(){
        return(
            <SingleCampusView campus = {this.props.campus} getCurrentCampus={this.props.getCurrentCampus}></SingleCampusView>
        )
    }
}

const mapState = (state) => {
    return({
        campus: state.campus
    });
}

const mapDispatch = (dispatch) => {
    return({
        edit: (campus) => dispatch(editCampusThunk(campus)),
        getCurrentCampus: (campus) => dispatch(currCampusThunk(campus))
    });
}

//allows us to connect mapState and mapDispatch objects to the SingleCampusContainer
export default connect(mapState, mapDispatch)(SingleCampusContainer);