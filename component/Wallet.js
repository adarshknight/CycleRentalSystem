import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Wallet = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Wallet
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Balance
              </Typography>
              <Typography color="textSecondary">
                Rs.500.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Points
              </Typography>
              <Typography color="textSecondary">
                565 points
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more cards for transactions, rewards, etc. */}
      </Grid>
    </Container>
  );
};

export default Wallet;
