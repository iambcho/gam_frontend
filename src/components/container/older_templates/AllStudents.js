/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */
import React, { Component } from 'react';
import './../../App.css';

// Import view;
import AllStudentsView from "./../view/AllStudentsView";

// This import is needed to connect our AllStudents Component to the store;
// enabling us to use the state and the functionality provided by the
// students.js file located in our store
import { connect } from "react-redux";

// These imports are needed to allow us to modify the 
// page based on teh action we want to preform
import { fetchStudentsThunk} from "./../../store/utilities/students"; //this is to display all students from students store
import { currStudentThunk } from "./../../store/utilities/student"; //this allows us to get the current student info for single student compoenent (check views to udnerstand)
import {removeStudentThunk } from "./../../store/utilities/students";

/*
General lay out of how page is works
When we go onto this component mapState is first called which provides an empty state,
then map dispatch is provided in order to have access to the functions given to us
through the imports above. From there the render menthod occurs, and it renders
AllStudentsView, but since the state is empty, no student is shown.
After that the componentDidMount is called because the rendering has finished.
This componentDidMount calls the fetch function and it provides all the students 
(hence the state is updated). As a result, the page gets re-rendered becasue the state
updated and this displays all the students. If you wish to double check please do console.log
at each component/function and you will see the order of things being called.
*/
class AllStudents extends Component {
    componentDidMount() {
        this.props.fetchAllStudents();
    }

    render() {
        return (
            //we pass the state into this component, so we can actually load all the students
            <AllStudentsView students = {this.props.students} getCurrentStudent= {this.props.getCurrentStudent} removeStudent={this.props.removeStudent}/>
        )
    }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
    return {
      students: state.students,
    }
  }
  
  // Declaration for mapDispatchToProps;
  // The keys in this returned object will be on your component's `props` object as well;
  // The values of these keys are anonymous functions that will dispatch imported action creators 
  // or thunks so that a component can communicate with the appropriate reducer function(s);
  const mapDispatch = (dispatch) => {
    return {
      fetchAllStudents: () => dispatch(fetchStudentsThunk()),
      getCurrentStudent: (student) => dispatch(currStudentThunk(student)),
      removeStudent: (id) => dispatch(removeStudentThunk(id))
    }
  }
  
  //allows us to connect to the store and get the needed objects/state
  export default connect(mapState, mapDispatch)(AllStudents);