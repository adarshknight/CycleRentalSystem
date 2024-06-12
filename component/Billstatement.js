import React from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const BillStatement = () => {
  // Sample bill details
  const billDetails = [
    { description: 'Bike Rental (3 days)', quantity: 1, unitPrice: 100.00 },
    { description: 'Helmet Rental (3 days)', quantity: 1, unitPrice: 50.00 },
    // Add more bill items as needed
  ];

  // Calculate total amount
  const totalAmount = billDetails.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Bill Statement
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Unit Price (Rs.)</TableCell>
              <TableCell align="right">Total (Rs.)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {billDetails.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.description}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.unitPrice.toFixed(2)}</TableCell>
                <TableCell align="right">{(item.quantity * item.unitPrice).toFixed(2)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right"><strong>Total</strong></TableCell>
              <TableCell align="right"><strong>{totalAmount.toFixed(2)}</strong></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default BillStatement;
