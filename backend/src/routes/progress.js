const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

// Get user progress
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user.progress);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update progress for a specific module
router.post('/:moduleId', auth, async (req, res) => {
  try {
    const { progress } = req.body;
    const user = await User.findById(req.userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.progress.set(req.params.moduleId, progress);
    await user.save();
    
    res.json(user.progress);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;