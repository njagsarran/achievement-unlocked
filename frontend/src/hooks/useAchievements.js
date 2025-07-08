import { useEffect, useState } from 'react';
import { getAchievements } from '../services/api';

function useAchievements() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAchievements()
      .then(setAchievements)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { achievements, loading };
}

export default useAchievements;
