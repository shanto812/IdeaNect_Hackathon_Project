const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxLength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
    minLength: [100, 'Description must be at least 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Please select a category'],
    enum: ['Technology', 'Healthcare', 'Education', 'Energy', 'Finance', 'Entertainment', 'Food & Beverage', 'Transportation', 'Other']
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fundingGoal: {
    type: Number,
    required: [true, 'Please specify funding goal'],
    min: [1000, 'Minimum funding goal is $1000']
  },
  currentFunding: {
    type: Number,
    default: 0
  },
  timeline: {
    type: Number,
    required: [true, 'Please specify timeline in months'],
    min: [1, 'Timeline must be at least 1 month'],
    max: [60, 'Timeline cannot exceed 60 months']
  },
  status: {
    type: String,
    enum: ['draft', 'pending', 'active', 'funded', 'rejected', 'completed'],
    default: 'pending'
  },
  images: [{
    type: String
  }],
  documents: [{
    name: String,
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  tags: [{
    type: String,
    lowercase: true
  }],
  milestones: [{
    title: String,
    description: String,
    targetDate: Date,
    completed: {
      type: Boolean,
      default: false
    }
  }],
  investors: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    amount: Number,
    investedAt: {
      type: Date,
      default: Date.now
    }
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  views: {
    type: Number,
    default: 0
  },
  pitchDeck: {
    type: String,
    default: null
  },
  businessPlan: {
    type: String,
    default: null
  },
  featured: {
    type: Boolean,
    default: false
  },
  rejectionReason: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});

// Index for search
ideaSchema.index({ title: 'text', description: 'text', tags: 'text' });

// Virtual for funding percentage
ideaSchema.virtual('fundingPercentage').get(function() {
  return Math.round((this.currentFunding / this.fundingGoal) * 100);
});

// Method to check if fully funded
ideaSchema.methods.isFullyFunded = function() {
  return this.currentFunding >= this.fundingGoal;
};

module.exports = mongoose.model('Idea', ideaSchema);