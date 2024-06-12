import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const contacts = [
  {
    name: 'Customer Support',
    email: 'support@yourbikeshop.com',
    phone: '+1 (123) 456-7890',
    avatar: 'https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Sales Team',
    email: 'sales@yourbikeshop.com',
    phone: '+1 (234) 567-8901',
    avatar: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'Technical Support',
    email: 'techsupport@yourbikeshop.com',
    phone: '+1 (345) 678-9012',
    avatar: 'https://images.pexels.com/photos/8101458/pexels-photo-8101458.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const Contacts = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        {contacts.map(contact => (
          <Grid item xs={12} sm={6} md={4} key={contact.name}>
            <Card elevation={3}>
              <CardContent>
                <Avatar alt={contact.name} src={contact.avatar} sx={{ width: 100, height: 100, margin: 'auto' }} />
                <Typography variant="h6" component="h2" align="center" gutterBottom>
                  {contact.name}
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                  Email: {contact.email}
                </Typography>
                <Typography variant="body1" align="center">
                  Phone: {contact.phone}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contacts;
