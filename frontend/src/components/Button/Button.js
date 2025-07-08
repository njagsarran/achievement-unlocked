import styles from './Button.module.scss';

const Button = ({ disabled, label, onClick }) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
