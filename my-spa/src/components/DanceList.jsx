import React from 'react';
import dances from './danceData'; 
import './DanceList.css';

const DanceList = () => {
  return (
    <div className="dance-list">
      {dances.map(dance => (
        <div key={dance.id} className="dance-item">
          <img src={dance.image} alt={dance.name} className="dance-image" />
          <h2>{dance.name}</h2>
          <p>{dance.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DanceList;
