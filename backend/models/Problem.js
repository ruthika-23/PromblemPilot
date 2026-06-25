const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  problemName: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    enum: ['LeetCode', 'CodeChef', 'HackerRank', 'GeeksforGeeks', 'Codeforces', 'Other'],
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true
  },
  status: {
    type: String,
    enum: ['Solved', 'Pending'],
    default: 'Pending'
  },
  topic: {
    type: String,
    trim: true
  },
  problemLink: {
    type: String,
    trim: true
  },
  notes: {
    type: String,
    default: ''
  },
  lastRevisedDate: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Problem', problemSchema);