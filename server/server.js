const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const moodLogRoutes = require('./routes/mood');
const correlationRoutes = require('./routes/correlation');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// mongoose.connect('mongodb+srv://sezinguzel14:12345@cluster0.w7vl6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
mongoose.connect('mongodb+srv://hbusto:12345@cluster0.adchg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/auth', authRoutes);
app.use('/moodlogs', moodLogRoutes)
app.use('/correlation', correlationRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});