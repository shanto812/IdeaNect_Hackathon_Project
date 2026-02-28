const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxLength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [6, 'Password must be at least 6 characters'],
    select: false // Don't return password by default
  },
  role: {
    type: String,
    enum: ['investor', 'creator'],
    required: [true, 'Please specify a role']
  },
  profilePicture: {
    type: String,
    default: null
  },
  bio: {
    type: String,
    maxLength: [500, 'Bio cannot be more than 500 characters'],
    default: ''
  },
  // For Investors
  investmentPreferences: {
    categories: [{
      type: String,
      enum: ['Technology', 'Healthcare', 'Education', 'Energy', 'Finance', 'Entertainment', 'Food & Beverage', 'Transportation', 'Other']
    }],
    minInvestment: {
      type: Number,
      default: 1000
    },
    maxInvestment: {
      type: Number,
      default: 100000
    }
  },
  totalInvested: {
    type: Number,
    default: 0
  },
  investments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Investment'
  }],
  // For Creators
  company: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  submittedIdeas: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Idea'
  }],
  verified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare password
userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Method to get public profile
userSchema.methods.getPublicProfile = function() {
  const { password, ...publicProfile } = this.toObject();
  return publicProfile;
};

module.exports = mongoose.model('User', userSchema);