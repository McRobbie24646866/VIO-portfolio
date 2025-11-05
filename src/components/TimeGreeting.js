import React, { useEffect, useState } from 'react';
import '../styles/TimeGreeting.css';

const TimeGreeting = () => {
  const [greeting, setGreeting] = useState('');
  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning, Runner!');
      setEmoji('🌅');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon, Coder!');
      setEmoji('☀️');
    } else if (hour >= 17 && hour < 21) {
      setGreeting('Good Evening, Developer!');
      setEmoji('🌆');
    } else {
      setGreeting('Burning the Midnight Oil?');
      setEmoji('🌙');
    }
  }, []);

  return (
    <div className="time-greeting">
      <span className="greeting-emoji">{emoji}</span>
      <h2 className="greeting-text">{greeting}</h2>
    </div>
  );
};

export default TimeGreeting;
