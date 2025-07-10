import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={styles.wrapper}>
      <Link
        to="/achievement-unlocked"
        className={`${styles.link} ${path === '/achievement-unlocked' ? styles.active : ''}`}
      >
        Achivement Unlocked
      </Link>
      <Link
        to="/achievements"
        className={`${styles.link} ${path === '/achievements' ? styles.active : ''}`}
      >
        View Achievements
      </Link>
    </div>
  );
};

export default Navigation;
