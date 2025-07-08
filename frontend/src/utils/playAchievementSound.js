import achievementSound from '../assets/achievementUnlocked.mp3';

function playAchievementSound() {
  const audio = new Audio(achievementSound);
  audio.play().catch((e) => {
    console.error('Audio play failed:', e);
  });
}

export default playAchievementSound;
