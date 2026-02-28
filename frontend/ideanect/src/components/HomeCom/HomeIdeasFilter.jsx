import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { 
  MdComputer, 
  MdRestaurant, 
  MdSchool, 
  MdHealthAndSafety, 
  MdEco 
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const FilteredIdeasSection = () => {
  // Categories with icons
  const categories = [
    { name: 'All', icon: null },
    { name: 'Tech', icon: <MdComputer className="w-5 h-5" /> },
    { name: 'Food', icon: <MdRestaurant className="w-5 h-5" /> },
    { name: 'Education', icon: <MdSchool className="w-5 h-5" /> },
    { name: 'Health', icon: <MdHealthAndSafety className="w-5 h-5" /> },
    { name: 'Environment', icon: <MdEco className="w-5 h-5" /> }
  ];

  // All ideas data (20+ ideas)
  const allIdeas = [
    // Tech Ideas
    {
      id: 1,
      title: "AI Code Assistant",
      description: "Intelligent coding companion that helps developers write better code faster with AI-powered suggestions.",
      category: "Tech",
      fundingGoal: 150000,
      fundingRaised: 120000,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      title: "CloudSync Pro",
      description: "Enterprise cloud synchronization platform with advanced security features and real-time collaboration.",
      category: "Tech",
      fundingGoal: 200000,
      fundingRaised: 140000,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 3,
      title: "CyberShield",
      description: "Next-gen cybersecurity solution using machine learning to prevent data breaches.",
      category: "Tech",
      fundingGoal: 300000,
      fundingRaised: 180000,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      location: "Austin, TX"
    },
    {
      id: 4,
      title: "DevOps Automation",
      description: "Streamline your development pipeline with intelligent automation tools.",
      category: "Tech",
      fundingGoal: 100000,
      fundingRaised: 75000,
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop",
      location: "Denver, CO"
    },
    {
      id: 5,
      title: "Quantum Computing API",
      description: "Making quantum computing accessible through simple API integration.",
      category: "Tech",
      fundingGoal: 500000,
      fundingRaised: 250000,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop",
      location: "Boston, MA"
    },

    // Food Ideas
    {
      id: 6,
      title: "FarmFresh Direct",
      description: "Connect local farmers directly with consumers for fresh, organic produce delivery.",
      category: "Food",
      fundingGoal: 80000,
      fundingRaised: 65000,
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&h=300&fit=crop",
      location: "Portland, OR"
    },
    {
      id: 7,
      title: "Smart Kitchen AI",
      description: "AI-powered meal planning and automated grocery shopping based on dietary preferences.",
      category: "Food",
      fundingGoal: 120000,
      fundingRaised: 90000,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      location: "Chicago, IL"
    },
    {
      id: 8,
      title: "Zero Waste Restaurant",
      description: "Revolutionary restaurant concept with 100% sustainable practices and zero food waste.",
      category: "Food",
      fundingGoal: 250000,
      fundingRaised: 175000,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      location: "San Diego, CA"
    },
    {
      id: 9,
      title: "Plant-Based Protein",
      description: "Innovative plant-based meat alternatives that taste like the real thing.",
      category: "Food",
      fundingGoal: 300000,
      fundingRaised: 240000,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
      location: "Los Angeles, CA"
    },

    // Education Ideas
    {
      id: 10,
      title: "VR Classroom",
      description: "Immersive virtual reality learning experiences for K-12 students worldwide.",
      category: "Education",
      fundingGoal: 200000,
      fundingRaised: 110000,
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&h=300&fit=crop",
      location: "New York, NY"
    },
    {
      id: 11,
      title: "SkillMatch Academy",
      description: "Personalized skill development platform matching learners with industry mentors.",
      category: "Education",
      fundingGoal: 150000,
      fundingRaised: 100000,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      location: "Atlanta, GA"
    },
    {
      id: 12,
      title: "Language Learning AI",
      description: "AI tutor for conversational language learning with native speaker simulations.",
      category: "Education",
      fundingGoal: 100000,
      fundingRaised: 80000,
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&h=300&fit=crop",
      location: "Miami, FL"
    },
    {
      id: 13,
      title: "STEM for Kids",
      description: "Interactive STEM education platform making science fun for elementary students.",
      category: "Education",
      fundingGoal: 80000,
      fundingRaised: 60000,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop",
      location: "Houston, TX"
    },

    // Health Ideas
    {
      id: 14,
      title: "TeleHealth Plus",
      description: "Comprehensive telemedicine platform with AI-powered diagnosis assistance.",
      category: "Health",
      fundingGoal: 250000,
      fundingRaised: 200000,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop",
      location: "Boston, MA"
    },
    {
      id: 15,
      title: "Mental Wellness Tracker",
      description: "App that monitors mental health patterns and provides personalized wellness recommendations.",
      category: "Health",
      fundingGoal: 90000,
      fundingRaised: 72000,
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&h=300&fit=crop",
      location: "San Francisco, CA"
    },
    {
      id: 16,
      title: "Fitness DNA",
      description: "Personalized fitness and nutrition plans based on genetic analysis.",
      category: "Health",
      fundingGoal: 180000,
      fundingRaised: 140000,
      image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=500&h=300&fit=crop",
      location: "Phoenix, AZ"
    },
    {
      id: 17,
      title: "Senior Care Connect",
      description: "Platform connecting elderly care services with families needing support.",
      category: "Health",
      fundingGoal: 120000,
      fundingRaised: 95000,
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=500&h=300&fit=crop",
      location: "Orlando, FL"
    },
    {
      id: 18,
      title: "MedTrack IoT",
      description: "IoT devices for real-time medication tracking and patient monitoring.",
      category: "Health",
      fundingGoal: 300000,
      fundingRaised: 210000,
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&h=300&fit=crop",
      location: "Dallas, TX"
    },

    // Environment Ideas
    {
      id: 19,
      title: "Ocean Cleanup Drones",
      description: "Autonomous drones that collect plastic waste from oceans and waterways.",
      category: "Environment",
      fundingGoal: 400000,
      fundingRaised: 280000,
      image: "https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=500&h=300&fit=crop",
      location: "San Diego, CA"
    },
    {
      id: 20,
      title: "Solar Share",
      description: "Community solar panel sharing platform for renewable energy access.",
      category: "Environment",
      fundingGoal: 250000,
      fundingRaised: 175000,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      location: "Phoenix, AZ"
    },
    {
      id: 21,
      title: "Carbon Capture Tech",
      description: "Revolutionary carbon capture technology for industrial applications.",
      category: "Environment",
      fundingGoal: 500000,
      fundingRaised: 350000,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
      location: "Seattle, WA"
    },
    {
      id: 22,
      title: "Eco Building Materials",
      description: "Sustainable construction materials made from recycled ocean plastic.",
      category: "Environment",
      fundingGoal: 180000,
      fundingRaised: 135000,
      image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=500&h=300&fit=crop",
      location: "Portland, OR"
    },
    {
      id: 23,
      title: "Smart Water Management",
      description: "AI-powered water conservation system for agriculture and urban use.",
      category: "Environment",
      fundingGoal: 220000,
      fundingRaised: 165000,
      image: "https://images.unsplash.com/photo-1617345972922-78862c704cdb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
      location: "Sacramento, CA"
    }
  ];

  // State for active category
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredIdeas, setFilteredIdeas] = useState(allIdeas);

  // Filter function
  const filterIdeas = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredIdeas(allIdeas);
    } else {
      const filtered = allIdeas.filter(idea => idea.category === category);
      setFilteredIdeas(filtered);
    }
  };

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
            Explore Ideas by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Filter through innovative startup ideas across different industries
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => filterIdeas(category.name)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md border border-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                {category.name !== 'All' && (
                  <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                    activeCategory === category.name 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {allIdeas.filter(idea => idea.category === category.name).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing <span className="font-semibold text-gray-900">{filteredIdeas.length}</span> {filteredIdeas.length === 1 ? 'idea' : 'ideas'}
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIdeas.map((idea) => {
            const fundingPercentage = calculateFundingPercentage(idea.fundingRaised, idea.fundingGoal);
            
            return (
              <div 
                key={idea.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fadeIn"
              >
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
                  <div className="flex gap-1">
                    <Link to='/ideas'>
                    <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm font-medium cursor-pointer">
                      View Details
                    </button>
                    </Link>
                    <Link to='/login'>
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium flex items-center justify-center group cursor-pointer">
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

        {/* No Results Message */}
        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No ideas found in this category.</p>
          </div>
        )}
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FilteredIdeasSection;