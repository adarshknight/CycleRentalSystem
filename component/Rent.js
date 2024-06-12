import React, { useState } from 'react';
import CustomNavbar from './CustomNavbar';
import Footer from './Footer';
import { Button, Menu, MenuItem, TextField } from '@mui/material'; // Import Material-UI components
import QrCode from 'qrcode.react'; // Import QR code generation library
import './Rent.css'; // Import the Rent.css file for styling
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Rent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [rentalDuration, setRentalDuration] = useState(1); // Default rental duration is 1 hour
  const [rentalPrice, setRentalPrice] = useState(8); // Default rental price for 1 hour
  const [upiId, setUpiId] = useState(''); // State to store UPI ID input
  const videoLink = "https://player.vimeo.com/progressive_redirect/playback/428944810/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=0ac63905148f0de74f75296889e26a563266616a2fb493f2b855992aa19c280d";

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    handleMenuClose();
    if (method === 'Scan QR') {
      setShowQR(true); // Show QR code when user selects "Scan QR"
    } else {
      setShowQR(false); // Hide QR code for other payment methods
    }
  };

  const handleBankSelect = (bank) => {
    setSelectedBank(bank);
    handleMenuClose();
  };

  const handleWalletQRClick = () => {
    setShowQR(!showQR);
  };

  const handleIncreaseDuration = () => {
    setRentalDuration((prevDuration) => prevDuration + 1);
    setRentalPrice((prevPrice) => prevPrice + 8); // Increment price by 8 for each additional hour
  };

  const handleDecreaseDuration = () => {
    if (rentalDuration > 1) {
      setRentalDuration((prevDuration) => prevDuration - 1);
      setRentalPrice((prevPrice) => prevPrice - 8); // Decrement price by 8 for each hour removed
    }
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };

  const handleProceedPayment = () => {
    // Add your logic for proceeding with payment here
    console.log("Proceeding with payment...");
  };

  return (
    <div className="rent-page">
      <CustomNavbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="rent-title">Rent a Bike</h1>
            <p className="rent-description">
              Choose your bike, select rental duration, and proceed with payment.
            </p>
            {/* Add a description and warning */}
            <div className="rent-warning">
              <p><strong>Please Note:</strong> Rental charges are non-refundable.</p>
              <p>Ensure you select the correct bike and rental duration before proceeding.</p>
            </div>
            {/* Add payment methods here */}
            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              <div className="payment-method">
                <Button variant="contained" onClick={handleMenuOpen}>
                  Select Payment Method
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => handlePaymentMethodSelect('UPI')}>UPI</MenuItem>
                  <MenuItem onClick={() => handlePaymentMethodSelect('Scan QR')}>Scan QR</MenuItem>
                </Menu>
                {selectedPaymentMethod && (
                  <div className="selected-method">Selected Method: {selectedPaymentMethod}</div>
                )}
                {/* Render input box for UPI ID if selectedPaymentMethod is UPI */}
                {selectedPaymentMethod === 'UPI' && (
                  <div className="upi-input">
                    <TextField
                      label="Enter your UPI ID"
                      variant="outlined"
                      value={upiId}
                      onChange={handleUpiIdChange}
                    />
                  </div>
                )}
              </div>
              {/* Add more payment methods as needed */}
            </div>
          </div>
          <div className="col-md-4">
            {/* Space for video */}
            <video width="100%" controls>
              <source src={videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="image-description">
              <p>Select Rental Duration:</p>
              <button className="btn btn-secondary duration-button" onClick={handleDecreaseDuration}>-</button>
              <span className="rental-duration">{rentalDuration} Hours</span>
              <button className="btn btn-secondary duration-button" onClick={handleIncreaseDuration}>+</button>
              <p className="disclaimer">Price: ₹{rentalPrice}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Payment method, UPI ID box, and proceed payment */}
      <div className="payment-actions-container">
        <div className="payment-methods">
          {/* Existing code for payment methods */}
        </div>
        <div className="upi-input">
          {/* Existing code for UPI ID input */}
        </div>
        <Button variant="contained" color="primary" onClick={handleProceedPayment} className="proceed-button">
          Proceed Payment
        </Button>
      </div>
      <div className="qr-code-container">
        {showQR && (
          <QrCode value="Your QR Code Data Here" />
        )}
      </div>
      <div className="proceed-payment-container">
        <div style={{ height: '400px', width: '100%' }}>
          <MapContainer center={[13.0827, 80.2707]} zoom={12} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Add markers for dummy locations in Chennai */}
            <Marker position={[13.0827, 80.2707]}>
              <Popup>
                Mountain Bike
              </Popup>
            </Marker>
            <Marker position={[13.0878, 80.2785]}>
              <Popup>
                Road Bike
              </Popup>
            </Marker>
            {/* Add more markers for additional dummy locations */}
          </MapContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
