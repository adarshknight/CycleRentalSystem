import React from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blog-container">
      <CustomNavbar />
      <div className="blog-content">
        <h1>Latest Blog Posts</h1>
        <div className="blog-post">
          <div className="blog-image-container">
            <img src="https://www.flyopedia.com/blog/wp-content/uploads/2023/12/On-the-Road-Successful-Bicycle-Rental-Startups-Dominating-the-Indian-Market.jpg" alt="Bicycle Rental Startups" width="800" height="533" />
          </div>
          <div className="blog-details">
            <h2>On the Road: Successful Bicycle Rental Startups Dominating the Indian Market</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nulla sed nisi condimentum bibendum. Nullam in ligula ac lacus consequat malesuada. In hac habitasse platea dictumst. Phasellus varius vel libero ac hendrerit.
            </p>
            <div className="benefits">
              <h3>Benefits of Using Our Bikes</h3>
              <ul>
                <li>High-quality bicycles for a smooth ride</li>
                <li>Expertly maintained fleet for safety</li>
                <li>Flexible rental plans for every need</li>
              </ul>
              <Link to="/about" className="btn btn-primary">About Us</Link>
            </div>
          </div>
        </div>
        <div className="blog-post">
          <div className="blog-image-container">
            <img src="https://www.bikeexchange.de/_next/image?url=https%3A%2F%2F15b8fd0bddb564e4921d-c29300ff0ddcbc2cb03ff2c5a1ea365b.ssl.cf3.rackcdn.com%2Fimage_4-hfVPUrXi.jpg&w=3840&q=100" alt="Mountain Biking Adventures" width="800" height="533" />
          </div>
          <div className="blog-details">
            <h2>Mountain Biking Adventures: Exploring the Great Outdoors</h2>
            <p>
              Fusce a odio a orci sagittis tempor at in leo. Quisque fermentum, lacus non aliquet efficitur, justo eros ultrices tortor, non auctor mi libero vitae nisi. Aliquam accumsan, leo id ullamcorper venenatis, sem mi gravida eros.
            </p>
            <div className="benefits">
              <h3>Benefits of Using Our Bikes</h3>
              <ul>
                <li>Explore scenic trails and breathtaking views</li>
                <li>Customizable guided tours for every skill level</li>
                <li>Memorable experiences that last a lifetime</li>
              </ul>
              <Link to="/about" className="btn btn-primary">About Us</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
