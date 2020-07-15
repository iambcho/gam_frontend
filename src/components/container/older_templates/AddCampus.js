import React, { Component } from "react";
//need withrouter in order to push into the history, and this allows the edit form to go back to
//students page upon clicking submit
import {Link, withRouter} from 'react-router-dom';
//need this to compose a export of multiple components (in this case connect and withRouter)
import { compose } from 'redux';
import { connect } from 'react-redux';
import './../../App.css';

class AddCampus extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        //  create key:values for new object
        const id=this.getCampusId.value;
        const campusName=this.getCampusName.value;
        const campusLocation = "";
        const imageURL = "http://i.imgur.com/AItCxSs.jpg";
        const campusDescription = "";

        //  creates object
        const data = {
            id,
            campusName,
            campusLocation,
            imageURL,
            campusDescription,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        //  dispatches object of a new Campus
        this.props.dispatch({
            type:'ADD_CAMPUS',
            payload: data
        });

        //  clears forms of recently entered values
        this.getCampusName.value = '';
        this.getCampusId.value = '';
        this.props.history.push("/campuses");
    }

    //  renders form for AddCampus
    render() {
        const style = {
            color: 'white',
            textDecoration: 'none'
        }
        return(
            <div className="container">
                <div className="nav-bar">
                    <ul>
                        <li><Link style={style} to="/">Home</Link></li>
                        <li><Link style={style} to="/students">All Students</Link></li>
                        <li><Link style={style} to="/campuses">All Campuses</Link></li>
                    </ul>
                </div>

                <div className="App">
                    <header className="App-header">
                        <h1>Add Campus</h1>
                        <form onSubmit={this.handleSubmit}>
                            Campus Name:
                            <input type="text" required ref={(input)=>this.getCampusName = input} placeholder="Campus Name"/>
                            <br/>

                            Campus ID:
                            <input type="number" required ref={(input)=>this.getCampusId = input} placeholder="123456"/>
                            <br/>

                            <input type="submit" value="Add Campus"/>

                            <button><Link to ="/students">Cancel</Link></button>
                        </form>
                    </header>
                </div>
            </div>
        )
    }
}

// export default connect()(AddCampus);
/**
 * With the export we can only export one thing
 * but we need to export both withRouter and connect
 * as a result I use the compose component from the redux library to do it
 */
export default compose(
    withRouter,
    connect()
  )(AddCampus);