import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './component/AdminDashboard'; 
import ManageUsers from './component/ManageUSers'; 
import ManageProduct from './component/ManageProducts'; 
import Bikes2Ride from './component/Bikes2Ride';
import Home from './component/Home';
import BikeRental from './component/BikeRental';
import Rent from './component/Rent';
import GuidedTours from './component/GuidedTours';
import MyTrips from './component/MyTrips';
import Blog from './component/Blog';
import Chatbot from './component/Chatbot';
import Login from './component/Login';
import Signup from './component/Signup';
import Student from './component/Student';
import BikeService from './component/BikeService';
import About from './component/About';
import Contacts from './component/Contacts';
import Wallet from './component/Wallet';
import BillStatement from './component/Billstatement';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes2ride" element={<Bikes2Ride />} />
          <Route path="/bike-rental" element={<BikeRental />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/bike-service" element={<BikeService />} />
          <Route path="/guided-tours" element={<GuidedTours />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/student" element={<Student />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/billstatement" element={<BillStatement />} /> 
          {/* Add routes for AdminDashboard, ManageUsers, and ManageProducts */}
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/products" element={<ManageProduct />} />


        </Routes>
      </div>
    </Router>
  );
};

export default App;
