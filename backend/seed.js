require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./model/User');
const Idea = require('./model/Idea');

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Idea.deleteMany({});

    // Create sample users
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    const investor = await User.create({
      name: 'John Investor',
      email: 'investor@example.com',
      password: hashedPassword,
      role: 'investor',
      bio: 'Experienced investor looking for innovative ideas',
      investmentPreferences: {
        categories: ['Technology', 'Healthcare'],
        minInvestment: 5000,
        maxInvestment: 50000
      }
    });

    const creator = await User.create({
      name: 'Jane Creator',
      email: 'creator@example.com',
      password: hashedPassword,
      role: 'creator',
      bio: 'Entrepreneur with innovative ideas',
      company: 'InnovateTech Inc.'
    });

    // Create sample ideas
    const ideas = await Idea.create([
      {
        title: 'AI-Powered Healthcare Platform',
        description: 'A revolutionary healthcare platform that uses artificial intelligence to provide personalized health recommendations and early disease detection. Our platform analyzes patient data, medical history, and lifestyle factors to create comprehensive health profiles.',
        category: 'Healthcare',
        creator: creator._id,
        fundingGoal: 100000,
        currentFunding: 45000,
        timeline: 18,
        status: 'active',
        tags: ['ai', 'healthcare', 'machine-learning'],
        milestones: [
          {
            title: 'MVP Development',
            description: 'Complete minimum viable product',
            targetDate: new Date('2024-06-01')
          },
          {
            title: 'Beta Testing',
            description: 'Launch beta with 100 users',
            targetDate: new Date('2024-09-01')
          }
        ]
      },
      {
        title: 'Sustainable Energy Storage Solution',
        description: 'An innovative energy storage system using advanced battery technology to store renewable energy efficiently. Our solution addresses the intermittency issues of solar and wind power, making renewable energy more reliable and accessible.',
        category: 'Energy',
        creator: creator._id,
        fundingGoal: 250000,
        currentFunding: 75000,
        timeline: 24,
        status: 'active',
        tags: ['renewable-energy', 'sustainability', 'cleantech']
      }
    ]);

    console.log('Database seeded successfully!');
    console.log('Sample users:');
    console.log('- Investor: investor@example.com / password123');
    console.log('- Creator: creator@example.com / password123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();