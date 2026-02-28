import React from 'react';
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const IdeasSection = () => {
  const ideas = [
    {
      id: 1,
      title: "EcoTrack - Carbon Footprint Tracker",
      description: "Mobile app that helps individuals and businesses track, reduce, and offset their carbon emissions through gamification.",
      category: "GreenTech",
      fundingGoal: 100000,
      fundingRaised: 75000,
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500&h=300&fit=crop",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "HealthAI - Personal Health Assistant",
      description: "AI-powered health monitoring system that predicts potential health issues before they become serious problems.",
      category: "HealthTech",
      fundingGoal: 150000,
      fundingRaised: 120000,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      location: "Boston, MA"
    },
    {
      id: 3,
      title: "EduVerse - VR Learning Platform",
      description: "Virtual reality platform that makes education immersive and interactive for students worldwide.",
      category: "EdTech",
      fundingGoal: 200000,
      fundingRaised: 110000,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&h=300&fit=crop",
      location: "Austin, TX"
    },
    {
      id: 4,
      title: "FoodLoop - Zero Waste Delivery",
      description: "Sustainable food delivery service using reusable containers and electric vehicles for eco-conscious consumers.",
      category: "FoodTech",
      fundingGoal: 80000,
      fundingRaised: 65000,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 5,
      title: "FinFlow - Smart Finance Manager",
      description: "Automated financial planning tool that helps millennials achieve their financial goals through AI-driven insights.",
      category: "FinTech",
      fundingGoal: 120000,
      fundingRaised: 90000,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 6,
      title: "AgriSmart - IoT Farming Solution",
      description: "IoT-based smart farming system that optimizes crop yield while reducing water usage by 40%.",
      category: "AgriTech",
      fundingGoal: 250000,
      fundingRaised: 175000,
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop",
      location: "Des Moines, IA"
    },
    {
      id: 7,
      title: "SecureChain - Blockchain Security",
      description: "Next-generation blockchain security platform protecting digital assets with quantum-resistant encryption.",
      category: "Blockchain",
      fundingGoal: 300000,
      fundingRaised: 180000,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop",
      location: "Miami, FL"
    },
    {
      id: 8,
      title: "MindSpace - Mental Wellness App",
      description: "Personalized mental health support app connecting users with therapists and providing daily wellness exercises.",
      category: "Wellness",
      fundingGoal: 90000,
      fundingRaised: 72000,
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&h=300&fit=crop",
      location: "Portland, OR"
    }
  ];

  const calculateFundingPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
           Some Featured of Startup Ideas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover innovative startups seeking investment and be part of the next big success story
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ideas.map((idea) => {
            const fundingPercentage = calculateFundingPercentage(idea.fundingRaised, idea.fundingGoal);
            
            return (
              <div key={idea.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={idea.image} 
                    alt={idea.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white text-xs font-semibold rounded-full">
                      {idea.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1">
                    {idea.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {idea.description}
                  </p>

                  {/* Location */}
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <HiOutlineLocationMarker className="w-4 h-4 mr-1" />
                    <span>{idea.location}</span>
                  </div>

                  {/* Funding Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Funding Progress</span>
                      <span className="font-semibold text-gray-900">{fundingPercentage.toFixed(0)}%</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] h-2 rounded-full transition-all duration-500"
                        style={{ width: `${fundingPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-2">
                      <span className="text-gray-500">
                        Raised: <span className="font-semibold text-gray-700">{formatCurrency(idea.fundingRaised)}</span>
                      </span>
                      <span className="text-gray-500">
                        Goal: {formatCurrency(idea.fundingGoal)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <Link to='/login'> 
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center justify-center group">
                      Invest Now
                      <FiArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
            <Link to='/ideas'>
          <button className="px-8 py-3 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white font-semibold rounded-md hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center">
            View All Ideas
            <FiArrowRight className="ml-2" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IdeasSection;