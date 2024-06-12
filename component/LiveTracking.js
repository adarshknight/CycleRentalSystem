import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

const LiveTracking = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Subscribe to location updates
    const subscription = supabase
      .from('locations')
      .on('INSERT', payload => {
        setLocations(prevLocations => [...prevLocations, payload.new]);
      })
      .subscribe();

    // Unsubscribe when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <h2>Live Tracking</h2>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveTracking;
