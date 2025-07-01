const mongoose = require('mongoose');

const AchievementSchema = new mongoose.Schema({
  value: String,
});

module.exports = mongoose.model('Achievement', AchievementSchema, 'achievements');
