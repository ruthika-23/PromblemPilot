const express = require('express');
const router = express.Router();
const {
  getProblems,
  getProblem,
  createProblem,
  updateProblem,
  deleteProblem
} = require('../controllers/problemController');
const protect = require('../middleware/authMiddleware');

router.get('/', protect, getProblems);
router.get('/:id', protect, getProblem);
router.post('/', protect, createProblem);
router.put('/:id', protect, updateProblem);
router.delete('/:id', protect, deleteProblem);

module.exports = router;
