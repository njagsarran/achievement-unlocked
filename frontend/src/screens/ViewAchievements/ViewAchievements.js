import styles from './ViewAchievements.module.scss';
import { Table } from '../../components';
import { useAchievements } from '../../hooks';

const ViewAchievements = () => {
  const { achievements, loading } = useAchievements();
  return <Table data={achievements} />;
};

export default ViewAchievements;
