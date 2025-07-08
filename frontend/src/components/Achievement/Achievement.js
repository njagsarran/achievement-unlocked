import styles from './Achievement.module.scss';

const Achievement = ({ description, title, value }) => {
  return (
    <div className={styles.wrapper}>
      {`Achievement Unlocked: ${title}`}
      <br/>
      {`${value}G - ${description}`}
    </div>
  );
};

export default Achievement;
