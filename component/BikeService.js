// BikeService.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BikeService.css'; // Import CSS for styling
import MapComponent from './MapComponent'; // Import the MapComponent

const Popup = ({ handleClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Request Submitted</h2>
        <p>We'll be there within 15 minutes.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

const BikeService = () => {
  const [issue, setIssue] = useState('');
  const [repairType, setRepairType] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  };

  const handleRepairTypeChange = (e) => {
    setRepairType(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can handle the submission logic, like sending an email or making an API call
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 15000); // Hide the popup after 15 seconds
  };

  return (
    <div className="service-page">
      <header>
        <h1>Bike Service</h1>
        <p>Keep your bike in top condition with our expert repair services</p>
      </header>
      <section className="service-details">
        <div className="map-container">
          <MapComponent />
        </div>
        <div className="service-form">
          <h2>Report an Issue</h2>
          <textarea
            placeholder="Describe the issue you're facing"
            value={issue}
            onChange={handleIssueChange}
            className="issue-input"
          />
          <h2>Select Repair Type</h2>
          <select value={repairType} onChange={handleRepairTypeChange} className="repair-dropdown">
            <option value="">Select Repair Type</option>
            <option value="Tune-up">Tune-up</option>
            <option value="Brake Adjustment">Brake Adjustment</option>
            <option value="Wheel Truing">Wheel Truing</option>
            {/* Add more repair options as needed */}
          </select>
          <button onClick={handleSubmit} className="submit-button">Submit Request</button>
          {showPopup && <Popup handleClose={() => setShowPopup(false)} />}
        </div>
      </section>
      <footer>
        <p>For urgent assistance, please call <a href="tel:18001234567">1-800-123-4567</a> or email <a href="mailto:service@bikes2ride.com">service@bikes2ride.com</a></p>
        <Link to="/contact" className="cta-button">Schedule Service</Link> {/* Replace '/contact' with your contact page */}
      </footer>
    </div>
  );
};

export default BikeService;