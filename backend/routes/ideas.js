const express = require('express');
const router = express.Router();
const {
  submitIdea,
  getIdeas,
  getIdea,
  updateIdea,
  getMyIdeas,
  toggleLike
} = require('../controllers/ideaController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getIdeas);
router.get('/my-ideas', protect, authorize('creator'), getMyIdeas);
router.get('/:id', getIdea);
router.post('/submit', protect, authorize('creator'), submitIdea);
router.put('/:id', protect, authorize('creator'), updateIdea);
router.post('/:id/like', protect, toggleLike);

module.exports = router;