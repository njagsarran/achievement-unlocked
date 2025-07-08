import styles from './Achievement.module.scss';
import AchievementIcon from '../AchievementIcon/AchievementIcon';

const Achievement = ({ description, title, value }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.achievementIcon}>
        <AchievementIcon />
      </div>
      <div className={styles.content}>
        {`Achievement Unlocked: ${title}`}
        <br/>
        {`${value}G - ${description}`}
      </div>
    </div>
  );
};

export default Achievement;
