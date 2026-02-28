const Idea = require('../models/Idea');
const User = require('../models/User');

// @desc    Submit new idea
// @route   POST /api/ideas/submit
exports.submitIdea = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      fundingGoal,
      timeline,
      tags,
      milestones
    } = req.body;

    // Create idea
    const idea = await Idea.create({
      title,
      description,
      category,
      fundingGoal,
      timeline,
      tags,
      milestones,
      creator: req.user.id
    });

    // Add idea to user's submitted ideas
    await User.findByIdAndUpdate(req.user.id, {
      $push: { submittedIdeas: idea._id }
    });

    res.status(201).json({
      success: true,
      message: 'Idea submitted successfully',
      idea
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message || 'Error submitting idea'
    });
  }
};

// @desc    Get all ideas (with filters)
// @route   GET /api/ideas
exports.getIdeas = async (req, res) => {
  try {
    const {
      category,
      status = 'active',
      search,
      minFunding,
      maxFunding,
      sort = '-createdAt',
      page = 1,
      limit = 10
    } = req.query;

    // Build query
    const query = {};
    
    if (category) query.category = category;
    if (status) query.status = status;
    if (minFunding || maxFunding) {
      query.fundingGoal = {};
      if (minFunding) query.fundingGoal.$gte = Number(minFunding);
      if (maxFunding) query.fundingGoal.$lte = Number(maxFunding);
    }
    if (search) {
      query.$text = { $search: search };
    }

    // Execute query with pagination
    const skip = (page - 1) * limit;
    
    const ideas = await Idea.find(query)
      .populate('creator', 'name email company')
      .sort(sort)
      .limit(Number(limit))
      .skip(skip);

    const total = await Idea.countDocuments(query);

    res.json({
      success: true,
      ideas,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching ideas'
    });
  }
};

// @desc    Get single idea
// @route   GET /api/ideas/:id
exports.getIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id)
      .populate('creator', 'name email company bio')
      .populate('investors.user', 'name email');

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: 'Idea not found'
      });
    }

    // Increment views
    idea.views += 1;
    await idea.save();

    res.json({
      success: true,
      idea
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching idea'
    });
  }
};

// @desc    Update idea (creator only)
// @route   PUT /api/ideas/:id
exports.updateIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: 'Idea not found'
      });
    }

    // Check if user is the creator
    if (idea.creator.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this idea'
      });
    }

    // Update fields
    const allowedUpdates = ['title', 'description', 'category', 'fundingGoal', 'timeline', 'tags', 'milestones'];
    allowedUpdates.forEach(field => {
      if (req.body[field] !== undefined) {
        idea[field] = req.body[field];
      }
    });

    await idea.save();

    res.json({
      success: true,
      message: 'Idea updated successfully',
      idea
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating idea'
    });
  }
};

// @desc    Get creator's ideas
// @route   GET /api/ideas/my-ideas
exports.getMyIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({ creator: req.user.id })
      .sort('-createdAt');

    res.json({
      success: true,
      count: ideas.length,
      ideas
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching your ideas'
    });
  }
};

// @desc    Like/Unlike idea
// @route   POST /api/ideas/:id/like
exports.toggleLike = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({
        success: false,
        message: 'Idea not found'
      });
    }

    const likeIndex = idea.likes.indexOf(req.user.id);
    
    if (likeIndex > -1) {
      // Unlike
      idea.likes.splice(likeIndex, 1);
    } else {
      // Like
      idea.likes.push(req.user.id);
    }

    await idea.save();

    res.json({
      success: true,
      likes: idea.likes.length,
      liked: likeIndex === -1
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing like'
    });
  }
};