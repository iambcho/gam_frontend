import React, { Component } from 'react';
//need withrouter in order to push into the history, and this allows the edit form to go back to
//students page upon clicking submit
import {Link, withRouter} from 'react-router-dom';
import './../../App.css';
//need this to compose a export of multiple components (in this case connect and withRouter)
import { compose } from "redux";
import { connect } from "react-redux";
import { fetchCampusesThunk, editCampusThunk} from "./../../store/utilities/campuses";
import { currCampusThunk } from "./../../store/utilities/campus";

class EditCampus extends Component {
    constructor(props) {
        super(props);
        //THIS IS DESTRUCTURING
        //const {firstName, lastName, gpa, imageUrl} = this.props.campus;

        //but don't need to set equal, it can implicitly understand (see example below below)
        this.state = {
            id: 0,
            campusName:"",
            campusLocation:"",
            imageURL: "",
            campusDescription:""
        }
    }
    
    async componentDidMount () {
        /**
         * I commented out both awaits becaause upon
         * didmount all we want to do is access the current campus
         * and that is updated the moment you click on edit (refer to
         * single campus view), thus you dont need getCurrentcampus calls
         * and the fetchAllCampuses is to just print out all the campuses.
         * If you want check is campuses state is updated check console
         * on EDIT action
         */
        // await this.props.fetchAllcampuses();
        // await this.props.getCurrentCampus();
        // await this.props.getCurrentCampus(this.props.campus);
        // this.props.getCurrentcampus(this.newcampus);
        const {id, campusName, campusLocation, imageURL, campusDescription} = this.props.campus;
        //fetching current campuses info and updating our current state with it
        this.setState(
            {
                id, campusName, campusLocation, imageURL, campusDescription
            }
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    handleEdit = (e) => {
        e.preventDefault();
       const {id, campusName, campusLocation, imageURL, campusDescription} = this.state;

        let newCampus = {
            id,
            campusName, 
            campusLocation, 
            imageURL, 
            campusDescription
        }
        this.props.editCampus(newCampus);
        this.props.history.push("/campuses");
        //dont need get current campus because edit campus updates the campus state
        // this.props.getCurrentcampus(newcampus);
        // console.log(newcampus);
        //this.props.dispatch({type: 'EDIT_campus', payload: newcampus});
    }
    render() {
        const style = {
            color: 'white',
            textDecoration: 'none'
        }
        return (              
            <div className="container">
                <div className = "nav-bar">
                    <ul>
                        <li><Link style={style} to="/">Home</Link></li>
                        <li><Link style={style} to="/students">All Students</Link></li>
                        <li><Link style={style} to="/campuses">All Campuses</Link></li>
                    </ul>
                </div>
                    
                <div className="App">    
                    <header className="App-header">
                        <h1>Edit Campus</h1>
                        <form onSubmit={this.handleEdit}>
                            Campus Name:
                            <input type = "text" name="campusName" onChange={this.handleChange} value={this.state.campusName}></input><br/>
                            Campus Location: 
                            <input type = "text" name="campusLocation" onChange={this.handleChange} value={this.state.campusLocation}></input><br/>
                            Campus Image URL:
                            <input type = "text" name="imageURL" onChange={this.handleChange} value={this.state.imageURL}></input><br/>
                            Campus Description
                            <input type = "text" name="campusDescription" onChange={this.handleChange} value={this.state.campusDescription}></input><br/>
                            <input type = "submit" value = "Save Changes"></input>                              
                        </form>
                        <br/>
                        <Link to="/single_campus">Back</Link>
                    </header>
                </div>
            </div>
        )
    }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
    return {
        campuses: state.campuses,
        campus: state.campus
    }
}
  
// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
        getCurrentCampus: (campus) => dispatch(currCampusThunk(campus)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    }
}

// export default connect(mapState, mapDispatch)(EditCampus);
export default compose(
    withRouter,
    connect(mapState, mapDispatch)
  )(EditCampus);


