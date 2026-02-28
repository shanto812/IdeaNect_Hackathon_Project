import React from 'react';
import { FiTarget, FiSmartphone, FiMessageSquare, FiBarChart2, FiGlobe, FiLink, FiMap } from 'react-icons/fi';
import { BsChatDots, BsGraphUp } from 'react-icons/bs';
import { MdAnalytics, MdOutlineVideoCall } from 'react-icons/md';
import { BiWorld, BiNetworkChart } from 'react-icons/bi';
import { AiOutlineAim, AiOutlineMobile } from 'react-icons/ai';
import { HiOutlineChip } from 'react-icons/hi';
import { RiGlobalLine } from 'react-icons/ri';
import { SiBlockchaindotcom } from 'react-icons/si';

const FuturePlans = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      icon: <FiTarget />,
      title: "Smart Matching Engine",
      description: "AI-powered algorithm connects startups with their perfect investor matches based on 50+ data points.",
      tags: ["AI", "Machine Learning"],
      color: "blue"
    },
    {
      quarter: "Q2 2024",
      icon: <FiSmartphone />,
      title: "Mobile Experience",
      description: "Launch native mobile apps for seamless pitching and networking anywhere, anytime.",
      tags: ["iOS", "Android"],
      color: "indigo"
    },
    {
      quarter: "Q3 2024",
      icon: <BsChatDots />,
      title: "Live Chat & Video",
      description: "Integrated messaging and video conferencing for direct startup-investor communication.",
      tags: ["Communication", "Real-time"],
      color: "purple"
    },
    {
      quarter: "Q4 2024",
      icon: <MdAnalytics />,
      title: "Analytics Dashboard",
      description: "Advanced metrics and insights to track pitch performance and investor engagement.",
      tags: ["Analytics", "Insights"],
      color: "pink"
    },
    {
      quarter: "Q1 2025",
      icon: <BiWorld />,
      title: "Global Marketplace",
      description: "Expand to 100+ countries with multi-language support and regional investor networks.",
      tags: ["International", "Growth"],
      color: "green"
    },
    {
      quarter: "Q2 2025",
      icon: <BiNetworkChart />,
      title: "Blockchain Integration",
      description: "Secure, transparent equity tracking and smart contracts for investment agreements.",
      tags: ["Web3", "Blockchain"],
      color: "orange"
    }
  ];
  
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600 border-blue-200",
    indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600 border-indigo-200",
    purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600 border-purple-200",
    pink: "from-pink-500 to-pink-600 bg-pink-50 text-pink-600 border-pink-200",
    green: "from-green-500 to-green-600 bg-green-50 text-green-600 border-green-200",
    orange: "from-orange-500 to-orange-600 bg-orange-50 text-orange-600 border-orange-200"
  };

  return (
    <section className="py-24 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-md mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <FiMap className="text-white text-lg" />
            </div>
            <span className="text-blue-700 font-bold text-sm uppercase tracking-wide">Roadmap</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl  text-gray-900 mb-6 font-sans">
            What's Coming Next
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to innovation never stops. Here's a glimpse into the features and improvements we're building for you.
          </p>
        </div>
        
        {/* Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => {
            const colors = colorClasses[item.color].split(' ');
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
              >
                {/* Quarter Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-1 ${colors[2]} ${colors[3]} rounded-full text-sm font-semibold`}>
                    {item.quarter}
                  </span>
                  <div className={`w-12 h-12 bg-gradient-to-br ${colors[0]} ${colors[1]} rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform`}>
                    <div className="text-white text-2xl">{item.icon}</div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 ${colors[2]} ${colors[3]} rounded-lg text-xs font-medium`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FuturePlans;