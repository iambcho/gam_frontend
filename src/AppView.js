import React from 'react';

// Link needed to be able to load the component 
// requested to our SPA
import {Link} from 'react-router-dom';

// Styling for App
import './App.css';

const AppView = () => {
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
            <img id = "main-image"src ="https://www.newsobserver.com/latest-news/mpxiqh/picture233585087/alternates/FREE_1140/unnamed.jpg" alt = "not found"></img>
            <h1 id = "main-page">Students and Campuses Home Page</h1>
            </header>
          </div>
      </div>
    );
}


export default AppView;