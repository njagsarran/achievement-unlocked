import styles from './AchievementIcon.module.scss';
import xboxLogo from '../../assets/xbox360Logo.png';

const AchievementIcon = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.playerIndicators} />
      <div className={styles.activePlayerIndicator} />
      <div className={styles.verticalLine} />
      <div className={styles.horizontalLine} />
      <div className={styles.logoBackground} />
      <img src={xboxLogo} alt="Xbox 360 Logo" className={styles.logo} />
    </div>
  );
};

export default AchievementIcon;
