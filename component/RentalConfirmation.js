import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const RentalConfirmation = ({ bookingDetails }) => {
  const [qrCodeValue] = useState(JSON.stringify(bookingDetails));

  return (
    <div>
      <h2>Rental Booking Confirmation</h2>
      <p>Please present the QR code below during pickup.</p>
      <QRCode value={qrCodeValue} />
    </div>
  );
};

export default RentalConfirmation;
