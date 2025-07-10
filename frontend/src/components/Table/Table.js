import styles from './Table.module.scss';

const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.headerCell}>
            Value
          </th>
          <th className={styles.headerCell}>
            Title
          </th>
          <th className={styles.headerCell}>
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr className={styles.row} key={row._id}>
              <td className={styles.cell}>{row.value}</td>
              <td className={styles.cell}>{row.title}</td>
              <td className={styles.cell}>{row.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
