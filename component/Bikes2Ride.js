import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot'; // Import Chatbot component
import Footer from './Footer'; // Import Footer component
import QRCode from 'react-qr-code'; // Import QRCode component
import { AppBar, Toolbar, Button, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material'; // Import Material UI components
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon from Material UI
import './Bikes2Ride.css';

const Bikes2Ride = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="bikes2ride-container">
      <AppBar position="static" color="inherit" className="custom-navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bikes2Ride
          </Typography>
          <Button color="inherit" component={Link} to="/">HOME</Button>
          <Button color="inherit" component={Link} to="/about">ABOUT</Button> {/* Link to About.js */}
          <Button color="inherit" component={Link} to="/bike-rental">BIKE RENTAL</Button>
          <Button color="inherit" component={Link} to="/guided-tours">TOURS</Button>
          <Button color="inherit" component={Link} to="/blog">BLOG</Button>
          <Button color="inherit" component={Link} to="/contacts">CONTACTS</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
            <ListItemText primary="HOME" />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={handleDrawerClose}>
            <ListItemText primary="ABOUT" />
          </ListItem>
          <ListItem button component={Link} to="/bike-rental" onClick={handleDrawerClose}>
            <ListItemText primary="BIKE RENTAL" />
          </ListItem>
          <ListItem button component={Link} to="/ride-like-a-local" onClick={handleDrawerClose}>
            <ListItemText primary="RIDE LIKE A LOCAL" />
          </ListItem>
          <ListItem button component={Link} to="/rentals" onClick={handleDrawerClose}>
            <ListItemText primary="RENTALS" />
          </ListItem>
          <ListItem button component={Link} to="/tours" onClick={handleDrawerClose}>
            <ListItemText primary="TOURS" />
          </ListItem>
          <ListItem button component={Link} to="/blog" onClick={handleDrawerClose}>
            <ListItemText primary="BLOG" />
          </ListItem>
          <ListItem button component={Link} to="/contacts" onClick={handleDrawerClose}>
            <ListItemText primary="CONTACTS" />
          </ListItem>
        </List>
      </Drawer>
      <h1 className="bikes2ride-title">WE RENT THE BEST BICYCLES OUT!</h1>
      <section className="bikes2ride-features">
        <h2>With more than 250 bicycle models in stock and awesome rental fees, we are the best in our field of expertise!</h2>
        <button onClick={toggleQRCode}> QR Code</button>
        <p>scan the qr to book now</p>
        {showQRCode && <QRCode value="https://yourwebsite.com/rental-confirmation" />}
        <div className="avatar-dance">
          <img src="https://media1.tenor.com/m/9izp9dysmJIAAAAC/brown-cony.gif" alt="Avatar Dancing" />
        </div>
      </section>
      <section className="bikes2ride-trusted">
        <h2>
          We strive to provide the best condition bicycles to your hands
        </h2>
        <address>
         
        </address>
      </section>
      <div className="chatbot-container">
        <Chatbot />
      </div>
      <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default Bikes2Ride;
