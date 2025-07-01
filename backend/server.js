const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();

const localURL = 'mongodb://localhost:27017/local';

const cloudUserName = process.env.MONGO_USERNAME;
const clousPassword = process.env.MONGO_PASSWORD;
const cloudURL = `mongodb+srv://${cloudUserName}:${clousPassword}@test-cluster.r2auwtz.mongodb.net/testDatabase?retryWrites=true&w=majority&appName=test-cluster`;

const Achievements = require('./models/Achievement');

mongoose.connect(cloudURL, {
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
