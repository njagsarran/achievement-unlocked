function getCSSVarTimeMs(name) {
    const stringValue = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    const floatValue = parseFloat(stringValue);
    return floatValue * (stringValue.includes('ms') ? 1 : 1000);
  }

function getAchievementShowTime() {
  const fadeInTime = getCSSVarTimeMs('--fade-in-time');
  const holdTime = getCSSVarTimeMs('--hold-time');
  const fadeOutTime = getCSSVarTimeMs('--fade-out-time');
  return fadeInTime + holdTime + fadeOutTime;
}

export default getAchievementShowTime;
