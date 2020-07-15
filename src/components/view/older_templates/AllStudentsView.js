/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */
import React from "react";
import {Link} from 'react-router-dom';

const AllStudentsView = (props) => {
    //object destructuring that takes students and getCurrentStudent from props
    const {students, getCurrentStudent, removeStudent} = props;
    const style = {
        color: 'white',
        textDecoration: 'none',
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
                <h1>All Students</h1>
                <button><Link to="/add_students">Add Student</Link></button>            
                <br/>          
                {
                    (students.length < 1)
                    ? <div> <p>There are no students</p> </div> 
                    : <div className="all-students-container">  
                        {/* Traverse through every student and make a Link to that individual student*/}

                        {/* This is how we connect all students to single students, when we create a Link to
                                each of the individual students, we give an onclick function that updates the
                                state student. Basically for every student that we generate this div for, it will
                                have a getCurrentStudent function that when this student is clicked will update the state
                                labeled student: with the object student itself and we can then use this info
                                in single student view*/}
                        {students.map(student => 
                        
                                <div className = "all-students-box" onClick={() => getCurrentStudent(student)}>                                    
                                    <div className="close-out"><button onClick={() => removeStudent(student.id)}>x</button></div>                                   
                                    <img src={student.imageUrl} width="80" height="80" alt = "not found"></img>
                                    <p>{student.firstName} {student.lastName}</p>
                                    
                                    <Link to={`/single_student/${student.id}`} ><div>Select Student</div></Link>
                                </div>)
                        }
                    </div>
                } 
            </header>
        </div>
    </div>
    )
}

export default AllStudentsView;