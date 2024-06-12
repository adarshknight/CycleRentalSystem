import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'; // Import CSSTransition for animations

import Footer from './Footer';
import './Home.css';
import CustomNavbar from './CustomNavbar';

const Home = () => {
  return (
    <div className="home-container">
      <CustomNavbar />
      <header className="home-header">
        <h1>Welcome to Bikes2Ride</h1>
        <p>Your premier destination for bicycle rentals and tours</p>
      </header>
      <section className="home-main">
        <div className="home-features">
          <div className="feature">
            <Link to="/bike-rental">
              <img src="https://rentop.in/blog/wp-content/uploads/2023/05/Cycle-on-Rent-in-Bangalore.jpg" alt="Bike Rental" />
            </Link>
            <h2>Bike Rental</h2>
            <p>Explore the city on our high-quality bicycles</p>
          </div>
          <div className="feature">
            <Link to="/bike-service">
              <img src="https://media.istockphoto.com/id/615281154/photo/mechanic-repairing-bicycle-rear-wheel.jpg?s=612x612&w=0&k=20&c=nBkGWTy2ERwp-8dATCiNSo_iAP1AVfpFScAwNr-wFoU=" alt="Bike Workshop" />
            </Link>
            <h2>Bike Service</h2>
            <p>Keep your bike in top condition with our repair services</p>
          </div>
          <div className="feature">
            <Link to="/guided-tours">
              <img src="https://static.toiimg.com/thumb/msid-100707119,width-1280,height-720,resizemode-4/100707119.jpg" alt="Guided Tours" />
            </Link>
            <h2>Guided Tours</h2>
            <p>Discover hidden gems with our experienced guides</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
