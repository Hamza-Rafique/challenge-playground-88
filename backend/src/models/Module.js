const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Linux', 'Git', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure'],
  },
  content: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Module', moduleSchema);