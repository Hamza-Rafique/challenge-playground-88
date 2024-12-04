const express = require('express');
const Module = require('../models/Module');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all modules
router.get('/', auth, async (req, res) => {
  try {
    const modules = await Module.find().sort('order');
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get module by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }
    res.json(module);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get modules by category
router.get('/category/:category', auth, async (req, res) => {
  try {
    const modules = await Module.find({ category: req.params.category }).sort('order');
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new module (admin only)
router.post('/', auth, async (req, res) => {
  try {
    const module = new Module(req.body);
    await module.save();
    res.status(201).json(module);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update module (admin only)
router.put('/:id', auth, async (req, res) => {
  try {
    const module = await Module.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }
    res.json(module);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete module (admin only)
router.delete('/:id', auth, async (req, res) => {
  try {
    const module = await Module.findByIdAndDelete(req.params.id);
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }
    res.json({ message: 'Module deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;