import React from 'react';

// Link needed to be able to load the component 
// requested to our SPA
import { Link } from 'react-router-dom';

// Styling for App
import '../../App.css';

const MissionView = () => {
  const style = {
    color: 'white',
    textDecoration: 'none',
    fontFamily: 'Overpass'
  }

  return (
    <div className="container">
      <div className="nav-bar">
        <ul>
          <li><Link style={style} to="/">Home</Link></li>
          <li><Link style={style} to="/mission">Our Mission</Link></li>
        </ul>
      </div>
      <br />

    </div>


  );
}


export default MissionView;