import React from 'react';
import { FiTarget, FiCheckCircle, FiClock, FiGlobe, FiUsers } from 'react-icons/fi';
import { BsInfinity, BsLightningCharge } from 'react-icons/bs';
import { HiOutlineSparkles } from 'react-icons/hi';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';

const OurMission = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Centered Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-300 rounded-md mb-8 shadow-sm ">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <FiTarget className="text-white text-xl" />
            </div>
            <span className="text-purple-700 font-bold text-base uppercase tracking-wide">Our Mission</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl  text-gray-900 mb-6 font-sans">
            Empowering Innovators to
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
              Build the Future Together
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto mt-8">
            Driving innovation by connecting startup founders with real investors, mentors, and opportunities worldwide.
          </p>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image */}
          <div className="relative order-1 lg:order-none">
            {/* Decorative blobs */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 group">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1374&q=80"
                alt="Team mission planning"
                className="w-full h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-900/30"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl group-hover:scale-105 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <FiCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">2025 Vision</div>
                    <div className="text-xs text-gray-600">Empower 1M Founders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8">
            {/* Inspiring Quote */}
            <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-l-4 border-purple-600">
              <RiDoubleQuotesL className="absolute top-4 right-4 w-12 h-12 text-purple-200" />
              <p className="text-xl italic text-gray-700 relative z-10">
                "Our mission to turn bold ideas into real impact — empowering every dreamer to create meaningful change."
              </p>
            </div>
            
            {/* Main Text */}
            <div className="space-y-5">
              <p className="text-lg text-gray-700 leading-relaxed">
                We're building a future where startup success is determined by vision, persistence, and innovation — not background or connections.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our platform, founders gain access to investors, mentors, and a community passionate about fueling growth and creativity worldwide.
              </p>
            </div>
            
            {/* Goa Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="flex items-center gap-3 mb-2">
                  <BsLightningCharge className="text-purple-600 text-2xl" />
                  <div className="text-3xl font-bold text-purple-600">100%</div>
                </div>
                <div className="text-sm text-gray-600">Commitment</div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="flex items-center gap-2 mb-2">
                  <FiClock className="text-blue-600 text-2xl" />
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                </div>
                <div className="text-sm text-gray-600">Global Access</div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="flex items-center gap-3 mb-2">
                  <FiUsers className="text-indigo-600 text-2xl" />
                  <div className="text-3xl font-bold text-indigo-600">150+</div>
                </div>
                <div className="text-sm text-gray-600">Investor Partners</div>
              </div>
              
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow group">
                <div className="flex items-center gap-3 mb-2">
                  <BsInfinity className="text-purple-600 text-2xl" />
                  <div className="text-3xl font-bold text-purple-600">∞</div>
                </div>
                <div className="text-sm text-gray-600">Opportunities</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurMission;