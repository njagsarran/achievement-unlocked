const LOCAL_URL = 'http://localhost:5000';
const CLOUD_URL = 'https://achievement-unlocked.onrender.com';

export async function getAchievements() {
  const res = await fetch(`${LOCAL_URL}/api/achievements`);
  if (!res.ok) {
    throw new Error('Failed to fetch achievements');
  }
  return res.json();
}

// export async function postAchievement(data) {
//   const res = await fetch(`${API_URL}/achievements`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error('Failed to create achievement');
//   return res.json();
// }
