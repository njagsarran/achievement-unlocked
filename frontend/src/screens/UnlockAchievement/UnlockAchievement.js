import { useState } from 'react';
import styles from './UnlockAchievement.module.scss';
import { Achievement, Button } from '../../components';
import { useAchievements } from '../../hooks';

const UnlockAchievement = () => {
  const { achievements, loading } = useAchievements();

  console.log('loading', loading);
  console.log('achievements', achievements);

  const [achievementVisible, setAchievementVisible] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState();

  function getCSSVarTimeMs(name) {
    const stringValue = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const floatValue = parseFloat(stringValue);
    return floatValue * (stringValue.includes('ms') ? 1 : 1000);
  }

  const fadeInTime = getCSSVarTimeMs('--fade-in-time');
  const holdTime = getCSSVarTimeMs('--hold-time');
  const fadeOutTime = getCSSVarTimeMs('--fade-out-time');
  
  const totalDuration = fadeInTime + holdTime + fadeOutTime;

  const showAchievement = () => {
    const randomIndex = Math.floor(Math.random() * achievements.length);
    setCurrentAchievement(achievements[randomIndex]);
    setAchievementVisible(true);

    setTimeout(() => {
      setAchievementVisible(false);
    }, totalDuration);
  }

  return (
    <div className={styles.wrapper}>
      <div style={{ padding: 10 }} />
      <Button
        label="Unlock Achievement"
        onClick={showAchievement}
      />
      <div style={{ marginTop: '20px' }} />
      
      {achievementVisible && <Achievement {...currentAchievement} />}
    </div>
  );
};

export default UnlockAchievement;
