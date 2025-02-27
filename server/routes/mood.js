const express = require('express');
const MoodLog = require('../models/MoodLog');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newMoodLog = new MoodLog(req.body);
    const savedLog = await newMoodLog.save();
    res.status(201).json(savedLog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;