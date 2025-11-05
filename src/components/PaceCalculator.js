import React, { useState } from 'react';
import '../styles/PaceCalculator.css';

const PaceCalculator = () => {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [pace, setPace] = useState(null);

  const calculatePace = () => {
    if (distance && time) {
      const totalMinutes = parseFloat(time);
      const dist = parseFloat(distance);
      const pacePerKm = totalMinutes / dist;
      const minutes = Math.floor(pacePerKm);
      const seconds = Math.round((pacePerKm - minutes) * 60);
      setPace(`${minutes}:${seconds.toString().padStart(2, '0')} min/km`);
    }
  };

  return (
    <div className="pace-calculator">
      <h3>🏃 Pace Calculator</h3>
      <div className="calculator-inputs">
        <input
          type="number"
          placeholder="Distance (km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
        <input
          type="number"
          placeholder="Time (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={calculatePace}>Calculate</button>
      </div>
      {pace && <div className="pace-result">Your pace: {pace}</div>}
    </div>
  );
};

export default PaceCalculator;
