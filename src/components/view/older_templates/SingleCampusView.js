// - [ ] Write a component to display a single campus with the following information:
//   - [ ] The campus's name, image, address and description
//   - [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
// - [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
// - [ ] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

import React from 'react';
import {Link} from 'react-router-dom';

const SingleCampusView = (props) => {

    console.log("displaying campus");
    const{campus, getCurrentCampus} = props;

    const style = {
        color: 'white',
        textDecoration: 'none'
    }

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
            <h1>Show Campus</h1>
            <div className = "Campus">
                <img src = {campus.imageURL} width="100" height="100" alt ="not found"></img>
                <p id = "campus-name">{campus.campusName}</p>
                <p id = "campus-description">{campus.campusDescription}</p>
                <p id = "campus-locations">{campus.campusLocation}</p>
                <br/>
                <Link to="/edit_campus"><button className = "Edit-Campus" onClick={() => getCurrentCampus(campus)}>Edit</button></Link>
                <p>Students on Campus</p>
                {/* Cannot use if else so need turnary operator */}
                {
                    (isNaN(campus.campusStudents) || campus.campusStudents < 1)
                    ? <div className = "No-Campus"><p>There are no students currently registered to this campus</p></div>
                    : <div className = "Campus-Exists"> 
                        <p>This student is registered to a campus</p>
                        <p> print out students in campuses</p> 
                        <select className = "Select-Campus">
                            <option value = "SELECT">SELECT</option>
                        </select>
                    </div>
                }
                <button /**Handle click event which should add existing students to this campus */>Add Students</button>
            </div>
        </div>
    </div>
    )
}
export default SingleCampusView;