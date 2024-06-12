import React from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import './MyTrip.css'; // Import MyTrip styles

const MyTrip = () => {
  // Dummy user data and biking stats
  const userProfile = {
    name: 'Paramesh',
    age: 20,
    gender: 'Male',
    totalRides: 10, // Total number of rides
    totalDuration: '15 hours', // Total duration of rides
    totalDistance: '150 km', // Total distance covered
    caloriesBurnt: '1000 kcal', // Total calories burnt
    progress: 60, // Progress percentage (e.g., 60%)
  };

  return (
    <div className="my-trip-container">
      <CustomNavbar /> {/* Include CustomNavbar */}
      <div className="my-trip-content">
        <h1>My Trip</h1>
        <div className="user-profile">
          <h2>User Profile</h2>
          <p>Name: {userProfile.name}</p>
          <p>Age: {userProfile.age}</p>
          <p>Gender: {userProfile.gender}</p>
        </div>
        <div className="biking-stats">
          <h2>Biking Stats</h2>
          <p>Total Rides: {userProfile.totalRides}</p>
          <p>Total Duration: {userProfile.totalDuration}</p>
          <p>Total Distance: {userProfile.totalDistance}</p>
          <p>Calories Burnt: {userProfile.caloriesBurnt}</p>
        </div>
        <div className="progress-container">
          <h2>Biking Progress</h2>
          <div className="progress-bar" style={{ width: `${userProfile.progress}%` }}></div>
        </div>
      </div>
      <Footer /> {/* Include Footer component */}
      <div className="innovative-section">
        {/* Add innovative content here */}
        <p>Explore more biking tips and routes on our blog!</p>
        <a href="/blog">Visit Our Blog</a>
      </div>
    </div>
  );
};

export default MyTrip;
