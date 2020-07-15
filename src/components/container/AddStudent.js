import React, { Component } from "react";
//need withrouter in order to push into the history, and this allows the edit form to go back to
//students page upon clicking submit
import {Link, withRouter} from 'react-router-dom';
//need this to compose a export of multiple components (in this case connect and withRouter)
import { compose } from 'redux';
import { connect } from 'react-redux';
import './../../App.css';

class AddStudent extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        //  create key:values for new object
        const id=this.getID.value;
        const firstName = this.getFirstName.value;
        const lastName = this.getLastName.value;
        const email = this.getEmail.value;
        const gpa = this.getGPA.value;
        const imageUrl = "http://i.imgur.com/AItCxSs.jpg";
        const campusId = 0;

        //  creates object
        const data = {
            id,
            firstName,
            lastName,
            email,
            gpa,
            imageUrl,
            createdAt: new Date(),
            updatedAt: new Date(),
            campusId
        }

        //  dispatches object of Student
        this.props.dispatch({
            type:'ADD_STUDENT',
            payload: data
        });

        //  clears forms of recently entered values
        this.getFirstName.value = '';
        this.getLastName.value = '';
        this.getEmail.value = '';
        this.getGPA.value = '';
        this.getID.value = '';

        this.props.history.push("/students");
    }

    //  renders form for AddStudents
    render() {
        const style = {
            color: 'white',
            textDecoration: 'none'
        }
        return(
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
                        <h1>Add Student</h1>
                        <form onSubmit={this.handleSubmit}>
                            First Name:
                            <input type="text" required ref={(input)=>this.getFirstName = input} placeholder="First Name"/>
                            <br/>

                            LastName: 
                            <input type="text" required ref={(input)=>this.getLastName = input} placeholder="Last Name"/>
                            <br/>

                            Email:
                            <input type="email" required ref={(input)=>this.getEmail = input} placeholder="Email"/>
                            <br/>

                            GPA: 
                            <input className="studentGPA" type="number" min="0" max="4" step="0.1" required ref={(input)=>this.getGPA = input} placeholder="3.8"/>
                            <br/>

                            Student ID:
                            <input className="studentID" type="number" required ref={(input)=>this.getID = input} placeholder="123456"/>
                            <br/>

                            <input type="submit" value="Add Student"/>

                            <button><Link to ="/students">Cancel</Link></button>
                        </form>
                    </header>
                </div>
            </div>
        )
    }
}

// export default connect()(AddStudent);
/**
 * With the export we can only export one thing
 * but we need to export both withRouter and connect
 * as a result I use the compose component from the redux library to do it
 */
export default compose(
    withRouter,
    connect()
  )(AddStudent);