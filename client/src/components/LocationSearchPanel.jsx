import React, { useState } from 'react';

const LocationSearchPanel = () => {
  const [locations, setLocations] = useState([
    { id: 1, name: 'Location 1' },
    { id: 2, name: 'Location 2' },
    { id: 3, name: 'Location 3' },
  ]);

  return (
    <div className="location-search-panel">
      <h2>Search Locations</h2>
      <ul>
        {locations.map(location => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSearchPanel;