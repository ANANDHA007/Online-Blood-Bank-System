import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <Link to="/blood-needer" style={{color:'white',textDecoration:'none'}}>
          <div className="card">
            <h2>Need Blood</h2>
            <img src="Need Blood.jpg" alt="Need Blood Icon" />
          </div>
        </Link>
      </div>
      <div className="container">
        <Link to="/blood-donar"  style={{color:'white',textDecoration:'none'}}>
          <div className="card">
            <h2>Donate Blood</h2>
            <img src="donate.jpg" alt="Donate Blood Icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
