import { useState } from 'react';
import styles from './UnlockAchievement.module.scss';
import { Achievement, Button } from '../../components';
import { useAchievements } from '../../hooks';
import { getAchievementShowTime, playAchievementSound } from '../../utils';

const UnlockAchievement = () => {
  const { achievements, loading } = useAchievements();

  console.log('loading', loading);
  console.log('achievements', achievements);

  const achievementShowTime = getAchievementShowTime();

  const showAchievement = () => {
    const randomIndex = Math.floor(Math.random() * achievements.length);
    setCurrentAchievement(achievements[randomIndex]);
    setAchievementVisible(true);

    playAchievementSound();

    setTimeout(() => {
      setAchievementVisible(false);
    }, achievementShowTime);
  }

  const [achievementVisible, setAchievementVisible] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState();

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
