const Idea = require('../models/Idea');
const Investment = require('../models/Investment');
const User = require('../models/User');

// @desc    Get investor dashboard data
// @route   GET /api/dashboard/investor
exports.getInvestorDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get investments
    const investments = await Investment.find({ investor: userId })
      .populate('idea', 'title category status currentFunding fundingGoal');

    // Calculate statistics
    const stats = {
      totalInvestments: investments.reduce((sum, inv) => sum + inv.amount, 0),
      activeProjects: investments.filter(inv => inv.status === 'confirmed').length,
      pendingReviews: await Idea.countDocuments({ 
        status: 'pending',
        'investors': { $size: 0 }
      }),
      avgROI: 0
    };

    // Calculate average ROI
    const confirmedInvestments = investments.filter(inv => inv.status === 'confirmed');
    if (confirmedInvestments.length > 0) {
      const totalROI = confirmedInvestments.reduce((sum, inv) => sum + inv.calculateROI(), 0);
      stats.avgROI = totalROI / confirmedInvestments.length;
    }

    // Get recent ideas for investment opportunities
    const recentIdeas = await Idea.find({ 
      status: 'active',
      'investors.user': { $ne: userId }
    })
    .populate('creator', 'name')
    .sort('-createdAt')
    .limit(5);

    // Get investment history
    const investmentHistory = await Investment.find({ investor: userId })
      .populate('idea', 'title')
      .sort('-createdAt')
      .limit(10);

    res.json({
      success: true,
      stats,
      investments,
      recentIdeas,
      investmentHistory
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data'
    });
  }
};

// @desc    Get creator dashboard data
// @route   GET /api/dashboard/creator
exports.getCreatorDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    // Get user's ideas
    const ideas = await Idea.find({ creator: userId });

    // Calculate statistics
    const stats = {
      totalIdeas: ideas.length,
      activeIdeas: ideas.filter(idea => idea.status === 'active').length,
      totalFundingRaised: ideas.reduce((sum, idea) => sum + idea.currentFunding, 0),
      totalViews: ideas.reduce((sum, idea) => sum + idea.views, 0),
      totalLikes: ideas.reduce((sum, idea) => sum + idea.likes.length, 0),
      avgFundingProgress: 0
    };

    // Calculate average funding progress
    if (ideas.length > 0) {
      const totalProgress = ideas.reduce((sum, idea) => {
        return sum + (idea.currentFunding / idea.fundingGoal) * 100;
      }, 0);
      stats.avgFundingProgress = totalProgress / ideas.length;
    }

    // Get recent investors
    const recentInvestors = await Investment.find({
      idea: { $in: ideas.map(i => i._id) }
    })
    .populate('investor', 'name email')
    .sort('-createdAt')
    .limit(5);

    res.json({
      success: true,
      stats,
      ideas,
      recentInvestors
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data'
    });
  }
};