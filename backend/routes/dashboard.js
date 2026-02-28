const express = require('express');
const router = express.Router();
const {
  getInvestorDashboard,
  getCreatorDashboard
} = require('../controllers/dashboardController');
const { protect, authorize } = require('../middleware/auth');

router.get('/investor', protect, authorize('investor'), getInvestorDashboard);
router.get('/creator', protect, authorize('creator'), getCreatorDashboard);

module.exports = router;