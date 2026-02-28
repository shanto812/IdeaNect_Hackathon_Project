import React from 'react';
import { HiOfficeBuilding, HiInformationCircle } from 'react-icons/hi';
import { FaLightbulb, FaHandshake, FaGlobeAsia, FaStar } from 'react-icons/fa';

const CompanyDetails = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Elegant Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border-2 border-[#5471ff]/30 rounded-full mb-8 shadow-lg">
            <div className="w-3 h-3 bg-[#5471ff] rounded-full animate-pulse"></div>
            <span className="text-[#5471ff] font-bold text-sm uppercase tracking-wider">Company Profile</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl  text-gray-900 mb-4  font-sans">
            Ideanect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-sans">
            Where Brilliant Ideas Meet Strategic Investment
          </p>
        </div>
        
        {/* Main Content - Premium Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Company Story - Spans 2 Columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-xl flex items-center justify-center">
                  <HiOfficeBuilding className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
              </div>
              
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5471ff] to-[#8b3ffc]">Ideanect</span> is Bangladesh's pioneering platform revolutionizing the startup investment landscape. We're not just a marketplace—we're a movement democratizing access to capital and opportunity across South Asia and beyond.
                </p>
                
                <p>
                  Founded in the vibrant tech hub of Dhaka, we understand the unique challenges faced by entrepreneurs in emerging markets. Our mission is to break down barriers, connect visionary founders with strategic investors, and fuel the next generation of innovation.
                </p>
                
                <p>
                  By combining cutting-edge AI matching technology with deep local expertise, we're creating a transparent ecosystem where talent meets capital, and ideas transform into thriving businesses.
                </p>
              </div>
              
              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-black text-[#5471ff] mb-1">2.5K+</div>
                  <div className="text-sm text-gray-600 font-medium">Active Startups</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#7060ff] mb-1">1.8K+</div>
                  <div className="text-sm text-gray-600 font-medium">Verified Investors</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-[#8b3ffc] mb-1">৳350M+</div>
                  <div className="text-sm text-gray-600 font-medium">Capital Raised</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-3xl p-8 shadow-2xl text-white h-full">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <HiInformationCircle className="w-6 h-6" />
                Quick Facts
              </h3>
              
              <div className="space-y-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Founded</div>
                  <div className="text-xl font-bold">January 2023</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Headquarters</div>
                  <div className="text-xl font-bold">Dhaka, Bangladesh</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Industry</div>
                  <div className="text-xl font-bold">FinTech • SaaS</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Team Size</div>
                  <div className="text-xl font-bold">35+ Professionals</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-sm text-white/80 mb-1 uppercase tracking-wide">Operating Region</div>
                  <div className="text-xl font-bold">South Asia & Global</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Core Values - Premium Layout */}
        <div className="mb-16 font-sans">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ideanect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Innovation */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#5471ff]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#5471ff] to-[#6a5dff] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FaLightbulb className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600 leading-relaxed">
                  Pioneering new solutions and constantly evolving to meet the needs of our dynamic ecosystem.
                </p>
              </div>
            </div>
            
            {/* Trust */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#6a5dff]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6a5dff] to-[#7f50fe] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FaHandshake className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Trust</h4>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting relationships through transparency, security, and unwavering commitment.
                </p>
              </div>
            </div>
            
            {/* Inclusivity */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#8b3ffc]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7f50fe] to-[#8b3ffc] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FaGlobeAsia className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Inclusivity</h4>
                <p className="text-gray-600 leading-relaxed">
                  Creating equal opportunities for entrepreneurs from all backgrounds and regions.
                </p>
              </div>
            </div>
            
            {/* Excellence */}
            <div className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100 hover:border-[#8b3ffc]/40 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8b3ffc] to-[#9e52fc] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <FaStar className="text-4xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h4>
                <p className="text-gray-600 leading-relaxed">
                  Delivering outstanding value and maintaining the highest standards in everything we do.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CompanyDetails;