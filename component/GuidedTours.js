import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './GuidedTours.css';

const GuidedTours = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current tour index

  // Placeholder data for guided tours
  const bikeTours = [
    {
      id: 1,
      route: 'Leh Ladakh',
      description: 'Duration: 7 days   ',
      image: 'https://www.trekkinginindia.com/images/cycling-tours-.jpg',
    },
    {
      id: 2,
      route: 'Delhi',
      description: 'Duration: 9 days',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c4/17/85/caption.jpg?w=1200&h=-1&s=1',
    },
    {
      id: 3,
      route: 'Simla',
      description: 'Duration:  5 days',
      image: 'https://www.bpmcdn.com/f/files/fernie/import/2020-11/23295732_web1_201119-FFP-FatBiking-fg_2.jpg',
    },
    {
      id: 4,
      route: 'Kerala',
      description: 'duration: 7 days',
      image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/01/a5/fb.jpg',
    },
    // Add more tours here if needed
  ];

  // Function to handle clicking on the arrow button to navigate to the next tour
  const handleNextTour = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bikeTours.length);
  };

  // Function to handle clicking on the arrow button to navigate to the previous tour
  const handlePreviousTour = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bikeTours.length) % bikeTours.length);
  };

  return (
    <div className="guided-tours-container">
      <header className="guided-tours-header">
        <h1>Guided Tours</h1>
        <p>Discover hidden gems with our experienced guides</p>
      </header>
      <section className="tour-list">
        <div className="tour-item">
          <div className="image-container">
            <button onClick={handlePreviousTour} className="arrow-button left">&lt;</button>
            <img src={bikeTours[currentIndex].image} alt={bikeTours[currentIndex].route} />
            <button onClick={handleNextTour} className="arrow-button right">&gt;</button>
          </div>
          <h2>{bikeTours[currentIndex].route}</h2>
          <p>{bikeTours[currentIndex].description}</p>
          <Link to={`/guided-tours/${bikeTours[currentIndex].id}`} className="btn btn-primary">View Details</Link>
        </div>
      </section>
      <div className="how-to-use">
        <h2>How to Use This</h2>
        <p>Instructions on how to use this app...</p>
        <p>Welcome to our Guided Tours platform! Here's a quick guide on how to use this app:</p>
        <ol>
          <li>Browse through the list of available tours by clicking on the left and right arrow buttons to navigate between tours.</li>
          <li>Click on the tour image or the "View Details" button to learn more about a specific tour.</li>
          <li>Once you've found a tour you're interested in, click on the "View Details" button to see more information and book your spot.</li>
          <li>Fill out the necessary information and follow the instructions to complete your booking.</li>
          <li>After booking, you'll receive a confirmation email with all the details of your tour.</li>
          <li>Get ready for an exciting adventure and make sure to arrive at the designated meeting point on time!</li>
        </ol>
      </div>
      <Footer />
    </div>
  );
  
  
};

export default GuidedTours;
