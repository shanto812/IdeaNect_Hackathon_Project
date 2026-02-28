import React from 'react';
import { FiEdit3, FiEye, FiMessageCircle, FiTrendingUp } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineChat, HiOutlineCash } from 'react-icons/hi';
import { MdOutlineRocket } from 'react-icons/md';
import { BiBuildings } from 'react-icons/bi';

const FeaturesSection = () => {
  const features = [
    {
      title: "Post your idea",
      description: "Share your innovative startup concept with our community of investors and entrepreneurs. Get valuable feedback and validation.",
      icon: <HiOutlineLightBulb className="w-8 h-8" />
    },
    {
      title: "Get exposure to investors",
      description: "Connect with verified investors actively looking for the next big opportunity. Increase your visibility in the startup.",
      icon: <FiEye className="w-8 h-8" />
    },
    {
      title: "Chat & get funded",
      description: "Engage in meaningful conversations with potential investors. Pitch your idea, negotiate terms, and secure the funding you need.",
      icon: <HiOutlineCash className="w-8 h-8" />
    },
    {
      title: "Build your startup",
      description: "Transform your idea into reality with the resources and support from our network. Scale your business to new heights & new goal.",
      icon: <MdOutlineRocket className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Company Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey from idea to funded startup in four simple steps
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Gradient Shadow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Card */}
              {/* CHANGED: Added "flex flex-col items-center" to center all content */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center">
                
                {/* Icon Container */}
                {/* CHANGED: Already centered with parent's flex and items-center */}
                <div className="w-16 h-16 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>

                {/* Card Title with Gradient */}
                {/* CHANGED: Added "text-center" to center the title text */}
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] bg-clip-text text-transparent text-center">
                  {feature.title}
                </h3>

                {/* Card Description */}
                {/* CHANGED: Added "text-center" to center the description text */}
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>

                {/* Step Number */}
                
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
       
      </div>
    </section>
  );
};

export default FeaturesSection;