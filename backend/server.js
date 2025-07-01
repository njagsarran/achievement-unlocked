const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const Achievements = require('./models/Achievement');

mongoose.connect('mongodb://localhost:27017/local', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/achievements', async (req, res) => {
  const achievements = await Achievements.find();
  console.log('ACHIEVEMENTS', achievements);
  res.json(achievements);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
