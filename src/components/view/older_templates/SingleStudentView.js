/**
 * Comments are done quickly, cannot ensure all information presented is accurate or 
 * up to date in future time, but the purpose of these coments are to help
 * understand the tech we are learning at our bootcamp.
 * Date: 1/14/20
 */
import React from "react";
import { Link } from "react-router-dom";

const SingleStudentsView = (props) =>{
    const style = {
        color: 'white',
        textDecoration: 'none'
    }

    const{student} = props; //the view will only get a student from the props 

    return(
        <div className="container"> 
            <div className = "nav-bar">
                <ul>
                <li><Link style = {style} to="/">Home</Link></li>
                <li><Link style = {style} to="/students">All Students</Link></li>
                <li><Link style = {style} to="/campuses">All Campuses</Link></li>
                </ul>
            </div>
            <div className = "App">
            <h1>Show Student</h1>
                <div className = "Student">
                    <img src = {student.imageUrl} width="100" height="100" alt ="not found"></img>
                    <p id = "student-name">{student.firstName} {student.lastName}</p>
                    <p id = "gpa">GPA: {student.gpa}</p>
                    <br/>

                    <Link to="/edit_student"><button >Edit</button></Link>

                    {/* Cannot use if else so need turnary operator */}
                    {
                        (student.campusId === null)
                        ? <div className = "No-Campus"><p>This student is not registered to a campus</p></div>
                        : <div className = "Campus-Exists"> 
                            <p>This student is registered to a campus</p>
                            <p> student.campusId</p> 
                            <select className = "Select-Campus">
                                {/* Options should come from database */}
                                <option value = "SELECT">SELECT</option>
                            </select>
                            <button className = "Change-Campus">Change Campus</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}

export default SingleStudentsView;