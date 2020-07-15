import React from 'react';

// Link needed to be able to load the component 
// requested to our SPA
import { Link } from 'react-router-dom';

// Styling for App
import '../../App.css';

const MissionView = () => {
  const style = {
    color: 'white',
    textDecoration: 'none'
  }
  return (
    <div className="container">
      <h1 id="main-page">Test Page</h1>
    </div>
  );
}


export default MissionView;