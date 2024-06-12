// MapComponent.js

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      } catch (error) {
        console.error('Error getting user location:', error);
        // Default to provided coordinates if user location cannot be retrieved
        setUserLocation([12.5238, 80.1568]);
      }
    };

    getUserLocation();
  }, []); // Run once on component mount

  // Define custom marker icon
  const customIcon = L.icon({
    iconUrl: 'https://www.svgrepo.com/show/70289/bike.svg', // URL to the SVG icon
    iconSize: [32, 32], // Size of the icon
    iconAnchor: [16, 16], // Point of the icon which will correspond to marker's location
  });

  return (
    <MapContainer center={userLocation || [12.5238, 80.1568]} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=usJXG1wC7eeymb3UOZM1"
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> | &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {userLocation && (
        <Marker position={userLocation} icon={customIcon}>
          <Popup>
            Your current location
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;