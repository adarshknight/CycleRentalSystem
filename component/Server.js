const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

// Mock database for cycle details
const cycleDetailsDB = {
  'Cycle 1': 'Cycle 1 details: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cycle 2': 'Cycle 2 details: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Cycle 3': 'Cycle 3 details: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

// Initialize an empty object to store user locations
const userLocations = {};

// WebSocket event handling
io.on('connection', (socket) => {
  console.log('A user connected');

  // Listen for location updates
  socket.on('updateLocation', (location) => {
    const { userId, latitude, longitude } = location;
    userLocations[userId] = { latitude, longitude };
    
    // Broadcast updated location to all clients
    io.emit('locationUpdate', userLocations);
  });

  // Listen for request for cycle details
  socket.on('requestCycleDetails', (cycleId) => {
    // Check if cycle details exist in the mock database
    if (cycleDetailsDB[cycleId]) {
      // Send cycle details to the client
      socket.emit('cycleDetails', cycleDetailsDB[cycleId]);
    } else {
      // If cycle details not found, send an error message
      socket.emit('cycleDetails', `Cycle details for ${cycleId} not found.`);
    }
  });

  // Listen for disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});