import React, { useState } from 'react';
import './App.css';
import { Achievement, Button } from '../../components';

const App = () => {
  const [achievementVisible, setAchievementVisible] = useState(false);
  const achievementValue = 50;
  const achievementName = 'Sample Cheevo';

  return (
    <div className="App">
      <div style={{ padding: 10 }} />
      <Button
        label="Unlock Achievement"
        onClick={() => setAchievementVisible(true)}
      />
      <div style={{ marginTop: '20px' }} />
      
      {achievementVisible && <Achievement
        value={achievementValue}
        achievementName={achievementName}
      />}
    </div>
  );
}

export default App;
