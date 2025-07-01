import React, { useEffect, useState } from 'react';
import './App.css';
import { Achievement, Button } from '../../components';

const App = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/achievements')
      .then(res => res.json())
      .then(data => setAchievements(data))
      .catch(err => console.error('Error fetching achievements:', err));
  }, []);

  console.log('achievements', achievements);

  const [achievementVisible, setAchievementVisible] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState();

  return (
    <div className="App">
      <div style={{ padding: 10 }} />
      <Button
        label="Unlock Achievement"
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * achievements.length);
          setCurrentAchievement(achievements[randomIndex]);
          setAchievementVisible(true);
        }}
      />
      <div style={{ marginTop: '20px' }} />
      
      {achievementVisible && <Achievement {...currentAchievement} />}
    </div>
  );
};

export default App;
