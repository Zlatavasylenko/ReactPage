import { useState } from 'react';
import DanceList from "./components/DanceList";
import DanceStatistics from "./components/DanceStatistics";
import dances from "./components/danceData"; 

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Type of</h1>

      <DanceList dances={dances} /> {}
      <DanceStatistics data={dances} /> {}
    </>
  );
}

export default App;
