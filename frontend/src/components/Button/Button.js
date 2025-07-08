import styles from './Button.module.scss';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Button = ({ achievementVisible, label, loading, onClick }) => {
  const content = loading ? <LoadingSpinner /> : label;
  const disabled = achievementVisible || loading;

  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
