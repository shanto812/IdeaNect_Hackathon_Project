const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  investor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  idea: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Idea',
    required: true
  },
  amount: {
    type: Number,
    required: [true, 'Investment amount is required'],
    min: [100, 'Minimum investment is $100']
  },
  percentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'bank_transfer', 'paypal', 'crypto'],
    required: true
  },
  transactionId: {
    type: String,
    unique: true,
    sparse: true
  },
  terms: {
    type: String,
    default: ''
  },
  returns: {
    expected: {
      type: Number,
      default: 0
    },
    actual: {
      type: Number,
      default: 0
    }
  },
  milestonePayments: [{
    milestone: String,
    amount: Number,
    dueDate: Date,
    paid: {
      type: Boolean,
      default: false
    },
    paidAt: Date
  }],
  documents: [{
    name: String,
    url: String,
    type: {
      type: String,
      enum: ['agreement', 'invoice', 'receipt', 'report', 'other']
    },
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  notes: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Calculate ROI
investmentSchema.methods.calculateROI = function() {
  if (this.amount === 0) return 0;
  return ((this.returns.actual - this.amount) / this.amount) * 100;
};

module.exports = mongoose.model('Investment', investmentSchema);