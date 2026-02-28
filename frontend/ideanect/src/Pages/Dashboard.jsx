import React, { useState } from 'react';

const Dashboard = () => {
  const user = { name: 'Investor' };
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDonatePopup, setShowDonatePopup] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState(null);
  const [donationAmount, setDonationAmount] = useState('');

  const ideas = [
    {
      id: 1,
      title: "AI-Powered Learning Platform",
      description: "An adaptive learning platform that uses AI to personalize education for students.",
      category: "Education",
      fundingGoal: 50000,
      currentFunding: 15000,
      ideaOwner: "John Doe",
      createdAt: "2024-01-15",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Eco-Friendly Packaging Solution",
      description: "Biodegradable packaging material made from agricultural waste.",
      category: "Environment",
      fundingGoal: 75000,
      currentFunding: 30000,
      ideaOwner: "Jane Smith",
      createdAt: "2024-01-20",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Smart Home Energy Manager",
      description: "IoT device that optimizes home energy consumption and reduces bills by 40%.",
      category: "Technology",
      fundingGoal: 100000,
      currentFunding: 45000,
      ideaOwner: "Mike Johnson",
      createdAt: "2024-01-18",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Health Monitoring Wearable",
      description: "Advanced wearable device for continuous health monitoring and early disease detection.",
      category: "Healthcare",
      fundingGoal: 120000,
      currentFunding: 60000,
      ideaOwner: "Sarah Williams",
      createdAt: "2024-01-22",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Mobile Food Delivery App",
      description: "Connect local farmers directly with consumers for fresh produce delivery.",
      category: "Food & Agriculture",
      fundingGoal: 80000,
      currentFunding: 25000,
      ideaOwner: "Robert Brown",
      createdAt: "2024-01-25",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Virtual Reality Training Platform",
      description: "VR-based professional training solution for medical and technical fields.",
      category: "Technology",
      fundingGoal: 150000,
      currentFunding: 90000,
      ideaOwner: "Emily Davis",
      createdAt: "2024-01-28",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Solar Panel Cleaning Robot",
      description: "Autonomous robot that cleans solar panels to maintain maximum efficiency.",
      category: "Environment",
      fundingGoal: 65000,
      currentFunding: 28000,
      ideaOwner: "David Chen",
      createdAt: "2024-02-01",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop"
    },
    {
      id: 8,
      title: "Mental Health App",
      description: "AI-powered mental health support app with 24/7 counseling and mood tracking.",
      category: "Healthcare",
      fundingGoal: 95000,
      currentFunding: 42000,
      ideaOwner: "Lisa Anderson",
      createdAt: "2024-02-03",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500&h=300&fit=crop"
    },
    {
      id: 9,
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain management system using blockchain technology.",
      category: "Technology",
      fundingGoal: 180000,
      currentFunding: 95000,
      ideaOwner: "James Wilson",
      createdAt: "2024-02-05",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
    },
    {
      id: 10,
      title: "Smart Agriculture System",
      description: "IoT sensors and AI for precision farming and crop yield optimization.",
      category: "Food & Agriculture",
      fundingGoal: 110000,
      currentFunding: 55000,
      ideaOwner: "Maria Garcia",
      createdAt: "2024-02-07",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=300&fit=crop"
    },
    {
      id: 11,
      title: "Online Tutoring Marketplace",
      description: "Platform connecting students with expert tutors for personalized learning.",
      category: "Education",
      fundingGoal: 70000,
      currentFunding: 35000,
      ideaOwner: "Kevin Lee",
      createdAt: "2024-02-09",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
    },
    {
      id: 12,
      title: "Water Purification System",
      description: "Affordable water purification device for developing countries.",
      category: "Environment",
      fundingGoal: 85000,
      currentFunding: 40000,
      ideaOwner: "Anna Martinez",
      createdAt: "2024-02-11",
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&h=300&fit=crop"
    },
    {
      id: 13,
      title: "Telemedicine Platform",
      description: "Comprehensive telemedicine solution for remote healthcare delivery.",
      category: "Healthcare",
      fundingGoal: 130000,
      currentFunding: 70000,
      ideaOwner: "Dr. Tom Harris",
      createdAt: "2024-02-13",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop"
    },
    {
      id: 14,
      title: "Electric Vehicle Charging Network",
      description: "Fast-charging station network for electric vehicles in urban areas.",
      category: "Technology",
      fundingGoal: 200000,
      currentFunding: 120000,
      ideaOwner: "Chris Taylor",
      createdAt: "2024-02-15",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=300&fit=crop"
    },
    {
      id: 15,
      title: "Vertical Farming System",
      description: "Indoor vertical farming solution for urban food production.",
      category: "Food & Agriculture",
      fundingGoal: 140000,
      currentFunding: 65000,
      ideaOwner: "Rachel Green",
      createdAt: "2024-02-17",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&h=300&fit=crop"
    },
    {
      id: 16,
      title: "Language Learning AI",
      description: "Conversational AI for immersive language learning experience.",
      category: "Education",
      fundingGoal: 90000,
      currentFunding: 48000,
      ideaOwner: "Sophie Turner",
      createdAt: "2024-02-19",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&h=300&fit=crop"
    },
    {
      id: 17,
      title: "Waste-to-Energy Converter",
      description: "Convert household waste into clean energy using advanced technology.",
      category: "Environment",
      fundingGoal: 175000,
      currentFunding: 88000,
      ideaOwner: "Mark Robinson",
      createdAt: "2024-02-21",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=500&h=300&fit=crop"
    },
    {
      id: 18,
      title: "DNA-Based Personalized Nutrition",
      description: "Customized meal plans based on genetic analysis and health goals.",
      category: "Healthcare",
      fundingGoal: 155000,
      currentFunding: 82000,
      ideaOwner: "Dr. Amanda White",
      createdAt: "2024-02-23",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop"
    },
    {
      id: 19,
      title: "Drone Delivery Service",
      description: "Automated drone delivery for fast and eco-friendly package shipping.",
      category: "Technology",
      fundingGoal: 220000,
      currentFunding: 135000,
      ideaOwner: "Alex Kumar",
      createdAt: "2024-02-25",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=300&fit=crop"
    },
    {
      id: 20,
      title: "Organic Baby Food Line",
      description: "100% organic, locally-sourced baby food subscription service.",
      category: "Food & Agriculture",
      fundingGoal: 60000,
      currentFunding: 32000,
      ideaOwner: "Jennifer Moore",
      createdAt: "2024-02-27",
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=300&fit=crop"
    },
    {
      id: 21,
      title: "Coding Bootcamp for Kids",
      description: "Interactive coding education program for children aged 7-14.",
      category: "Education",
      fundingGoal: 75000,
      currentFunding: 38000,
      ideaOwner: "Daniel Park",
      createdAt: "2024-03-01",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=300&fit=crop"
    },
    {
      id: 22,
      title: "Ocean Plastic Cleanup System",
      description: "Innovative system to collect and recycle ocean plastic waste.",
      category: "Environment",
      fundingGoal: 190000,
      currentFunding: 98000,
      ideaOwner: "Ocean Warriors Team",
      createdAt: "2024-03-03",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=500&h=300&fit=crop"
    },
    {
      id: 23,
      title: "AI Medical Diagnosis Assistant",
      description: "Machine learning system to assist doctors in accurate disease diagnosis.",
      category: "Healthcare",
      fundingGoal: 165000,
      currentFunding: 89000,
      ideaOwner: "Dr. Michael Chang",
      createdAt: "2024-03-05",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop"
    },
    {
      id: 24,
      title: "Smart Traffic Management",
      description: "AI-powered traffic control system to reduce congestion by 50%.",
      category: "Technology",
      fundingGoal: 210000,
      currentFunding: 125000,
      ideaOwner: "City Tech Solutions",
      createdAt: "2024-03-07",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop"
    },
    {
      id: 25,
      title: "Hydroponic Home Garden",
      description: "Compact hydroponic system for growing fresh herbs and vegetables at home.",
      category: "Food & Agriculture",
      fundingGoal: 55000,
      currentFunding: 28000,
      ideaOwner: "Green Home Co.",
      createdAt: "2024-03-09",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&h=300&fit=crop"
    },
    {
      id: 26,
      title: "Virtual Science Lab",
      description: "3D virtual laboratory for safe and accessible science experiments.",
      category: "Education",
      fundingGoal: 105000,
      currentFunding: 58000,
      ideaOwner: "EduTech Innovations",
      createdAt: "2024-03-11",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop"
    },
    {
      id: 27,
      title: "Carbon Capture Technology",
      description: "Innovative technology to capture and store CO2 from the atmosphere.",
      category: "Environment",
      fundingGoal: 250000,
      currentFunding: 145000,
      ideaOwner: "CleanAir Ventures",
      createdAt: "2024-03-13",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop"
    },
    {
      id: 28,
      title: "Sleep Quality Monitor",
      description: "Non-invasive device to track and improve sleep quality with AI insights.",
      category: "Healthcare",
      fundingGoal: 88000,
      currentFunding: 44000,
      ideaOwner: "SleepWell Tech",
      createdAt: "2024-03-15",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&h=300&fit=crop"
    },
    {
      id: 29,
      title: "Quantum Computing Cloud",
      description: "Cloud-based quantum computing platform for researchers and businesses.",
      category: "Technology",
      fundingGoal: 300000,
      currentFunding: 180000,
      ideaOwner: "QuantumLeap Inc.",
      createdAt: "2024-03-17",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop"
    },
    {
      id: 30,
      title: "Insect-Based Protein Products",
      description: "Sustainable protein source from farmed insects for human consumption.",
      category: "Food & Agriculture",
      fundingGoal: 125000,
      currentFunding: 68000,
      ideaOwner: "Future Foods Lab",
      createdAt: "2024-03-19",
      image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=500&h=300&fit=crop"
    },
    {
      id: 31,
      title: "AR Learning Glasses",
      description: "Augmented reality glasses for immersive educational experiences.",
      category: "Education",
      fundingGoal: 195000,
      currentFunding: 105000,
      ideaOwner: "Vision Learning Co.",
      createdAt: "2024-03-21",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=300&fit=crop"
    },
    {
      id: 32,
      title: "Biodegradable Phone Cases",
      description: "Eco-friendly phone cases that decompose naturally after use.",
      category: "Environment",
      fundingGoal: 45000,
      currentFunding: 22000,
      ideaOwner: "EcoCase Design",
      createdAt: "2024-03-23",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500&h=300&fit=crop"
    },
    {
      id: 33,
      title: "Elderly Care Robot",
      description: "AI companion robot to assist and monitor elderly people at home.",
      category: "Healthcare",
      fundingGoal: 175000,
      currentFunding: 92000,
      ideaOwner: "CareBot Systems",
      createdAt: "2024-03-25",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop"
    }
  ];

  const categories = ['all', 'Technology', 'Healthcare', 'Education', 'Environment', 'Food & Agriculture'];

  const filteredIdeas = ideas.filter(idea => {
    const matchesCategory = selectedCategory === 'all' || idea.category === selectedCategory;
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInvest = (idea) => {
    setSelectedIdea(idea);
    setShowDonatePopup(true);
    setDonationAmount('');
  };

  const handleContact = (ideaId) => {
    alert(`Contact feature coming soon for Idea #${ideaId}`);
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    if (!donationAmount || donationAmount <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }
    
    // Close popup
    setShowDonatePopup(false);
    
    // Show success message
    alert('🎉 Thank you for your interest! The Ideaman will respond soon.');
    
    // Reset form
    setDonationAmount('');
    setSelectedIdea(null);
  };

  const calculateProgress = (current, goal) => {
    return Math.min((current / goal) * 100, 100);
  };

  const totalIdeasViewed = 156;
  const totalInvested = ideas.reduce((sum, idea) => sum + idea.currentFunding, 0);
  const activeInvestments = ideas.filter(idea => idea.currentFunding > 0).length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Discover innovative ideas and make an impact with your investment
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <span className="text-3xl">👁️</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Ideas Viewed</p>
                <p className="text-2xl font-semibold">{totalIdeasViewed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-3xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Funding</p>
                <p className="text-2xl font-semibold">
                  ${totalInvested.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <span className="text-3xl">💼</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Active Ideas</p>
                <p className="text-2xl font-semibold">{activeInvestments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 rounded-lg">
                <span className="text-3xl">📈</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total Ideas</p>
                <p className="text-2xl font-semibold">{ideas.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="🔍 Search ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? '📁 All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Ideas Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💡 Investment Opportunities ({filteredIdeas.length})
          </h2>
          
          {filteredIdeas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIdeas.map(idea => (
                <div key={idea.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={idea.image} 
                      alt={idea.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="200"%3E%3Crect fill="%233b82f6" width="400" height="200"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EIdea Image%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 text-xs font-semibold rounded-full shadow">
                        {idea.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500">👤 {idea.ideaOwner}</span>
                      <span className="text-xs text-gray-500">
                        📅 {new Date(idea.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                      {idea.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {idea.description}
                    </p>
                    
                    {/* Funding Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Funding Progress</span>
                        <span className="font-bold text-green-600">
                          {calculateProgress(idea.currentFunding, idea.fundingGoal).toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2.5 rounded-full transition-all"
                          style={{ width: `${calculateProgress(idea.currentFunding, idea.fundingGoal)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm mt-2">
                        <span className="text-green-600 font-semibold">
                          ${idea.currentFunding.toLocaleString()} raised
                        </span>
                        <span className="font-semibold text-gray-900">
                          ${idea.fundingGoal.toLocaleString()} goal
                        </span>
                      </div>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleInvest(idea)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                      >
                        ❤️ Donate Now
                      </button>
                      <button
                        onClick={() => handleContact(idea.id)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg transition-all flex items-center justify-center"
                        title="Contact Company"
                      >
                        ✉️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-12 text-center">
              <p className="text-gray-500 text-xl mb-4">🔍 No ideas found.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">🚀 Ready to Make a Difference?</h3>
          <p className="text-blue-100 mb-6">
            Your investment can turn innovative ideas into reality and create positive change.
          </p>
          <button 
            onClick={() => alert('Contact form coming soon!')}
            className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            📞 Contact Our Team
          </button>
        </div>
      </div>

      {/* Donate Popup Sidebar */}
      {showDonatePopup && selectedIdea && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={() => setShowDonatePopup(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">💰 Investment Details</h2>
              <button 
                onClick={() => setShowDonatePopup(false)}
                className="text-white hover:text-gray-200 text-3xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Idea Image */}
              <img 
                src={selectedIdea.image} 
                alt={selectedIdea.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              {/* Idea Info */}
              <div className="mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                  {selectedIdea.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                  {selectedIdea.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedIdea.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>👤 {selectedIdea.ideaOwner}</span>
                  <span>📅 {new Date(selectedIdea.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Funding Details */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Funding Progress</h4>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all"
                    style={{ width: `${calculateProgress(selectedIdea.currentFunding, selectedIdea.fundingGoal)}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Raised</p>
                    <p className="text-xl font-bold text-green-600">
                      ${selectedIdea.currentFunding.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Goal</p>
                    <p className="text-xl font-bold text-gray-900">
                      ${selectedIdea.fundingGoal.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Remaining</p>
                    <p className="text-lg font-semibold text-orange-600">
                      ${(selectedIdea.fundingGoal - selectedIdea.currentFunding).toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Progress</p>
                    <p className="text-lg font-semibold text-blue-600">
                      {calculateProgress(selectedIdea.currentFunding, selectedIdea.fundingGoal).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>

              {/* Donation Form */}
              <form onSubmit={handleDonateSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    💵 Investment Amount ($)
                  </label>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                  />
                </div>

                {/* Quick Amount Buttons */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Quick Select:</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[100, 500, 1000, 5000].map(amount => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setDonationAmount(amount.toString())}
                        className="px-3 py-2 bg-gray-100 hover:bg-blue-100 hover:text-blue-700 rounded-lg text-sm font-medium transition-colors"
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  🚀 Submit Investment Request
                </button>
              </form>

              {/* Info Note */}
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-sm text-blue-800">
                  <strong>ℹ️ Note:</strong> Your investment request will be sent to the idea owner. 
                  They will contact you soon to discuss the next steps.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;