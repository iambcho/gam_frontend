import React, { Component }  from 'react';
//need withrouter in order to push into the history, and this allows the edit form to go back to
//students page upon clicking submit
import {Link, withRouter} from 'react-router-dom';
import './../../App.css';
//need this to compose a export of multiple components (in this case connect and withRouter)
import { compose } from 'redux';
import { connect  } from "react-redux";
import { fetchStudentsThunk, editStudentThunk} from "./../../store/utilities/students";
import { currStudentThunk } from "./../../store/utilities/student";

class EditStudent extends Component {
    constructor(props) {
        super(props);
        //THIS IS DESTRUCTURING
        //const {firstName, lastName, gpa, imageUrl} = this.props.student;

        //but don't need to set equal, it can implicitly understand (see example below below)
        this.state = {
            id: 0,
            firstName: "",
            lastName: "",
            gpa: 0,
            imageUrl: ""
        }
    }
    
    async componentDidMount () {
        /**
         * I commented out both awaits becaause upon
         * didmount all we want to do is access the current student
         * and that is updated the moment you click on edit (refer to
         * single student view), thus you dont need getCurrentStudent calls
         * and the fetchAllStudents is to just print out all the students.
         * If you want check is students state is updated check console
         * on EDIT action
         */
        // await this.props.fetchAllStudents();
        // await this.props.getCurrentStudent();
        // await this.props.getCurrentStudent(this.props.student);
        // this.props.getCurrentStudent(this.newStudent);
        const {id, firstName, lastName, gpa, imageUrl} = this.props.student;
        //fetching current students info and updating our current state with it
        this.setState(
            {
                id, firstName, lastName, gpa, imageUrl
            }
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }

    handleEdit = (e) => {
        e.preventDefault();
       const {id, firstName, lastName, gpa, imageUrl} = this.state;

        let newStudent = {
            id,
            firstName, 
            lastName, 
            gpa, 
            imageUrl
        }
        this.props.editStudent(newStudent);
        this.props.getCurrentStudent(newStudent);
        this.props.history.push("/students");
        //dont need get current student because edit student updates the student state
        // this.props.getCurrentStudent(newStudent);
        // console.log(newStudent);
        //this.props.dispatch({type: 'EDIT_STUDENT', payload: newStudent});
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
                        <li><Link style = {style} to="/">Home</Link></li>
                        <li><Link style = {style} to="/students">All Students</Link></li>
                        <li><Link style = {style} to="/campuses">All Campuses</Link></li>
                    </ul>
                </div>
                    
                <div className="App">    
                    <header className="App-header">
                        <h1>Edit Student</h1>
                        <form onSubmit={this.handleEdit}>
                            First name:
                            <input type = "text" name="firstName" onChange={this.handleChange} value={this.state.firstName}></input><br/>
                            Last name: 
                            <input type = "text" name="lastName" onChange={this.handleChange} value={this.state.lastName}></input><br/>
                            GPA: 
                            <input type = "number" min="0" max="4" step="0.1" name="gpa" onChange={this.handleChange} value={this.state.gpa}></input><br/>
                            Student image:
                            <input type = "text" name="imageUrl" onChange={this.handleChange} value={this.state.imageUrl}></input><br/>
                            <input type = "submit" value = "Save"></input>                              
                        </form>
                        <br/>
                        <Link to={`/single_student/${this.state.id}`}>Back</Link>
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
        students: state.students,
        student: state.student
    }
}
  
// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchStudentsThunk()),
        getCurrentStudent: (student) => dispatch(currStudentThunk(student)),
        editStudent: (student) => dispatch(editStudentThunk(student))
    }
}

// export default connect(mapState, mapDispatch)(EditStudent);
/**
 * With the export we can only export one thing
 * but we need to export both withRouter and connect
 * as a result I use the compose component from the redux library to do it
 */
export default compose(
    withRouter,
    connect(mapState, mapDispatch)
  )(EditStudent);