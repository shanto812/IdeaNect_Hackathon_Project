import React, { useState } from 'react';
import { FaStar, FaLightbulb, FaDollarSign, FaQuoteRight, FaChevronLeft, FaChevronRight, FaAward, FaUsers, FaBullseye } from 'react-icons/fa';
import { HiTrendingUp } from 'react-icons/hi';

const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Angel Investor",
      category: "investor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      achievement: "$2.5M Returns",
      metric: "12x ROI",
      story: "Through this platform, I discovered 3 early-stage startups that became unicorns. The quality of ideas and founders here is exceptional. My portfolio has grown exponentially.",
      rating: 5,
      verified: true,
      stats: {
        investments: 23,
        successful: 18,
        roi: "1,200%"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      category: "ideagenerator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      achievement: "Raised $5M Seed",
      metric: "100+ Employees",
      story: "Started with just an idea on this platform. Connected with amazing mentors and investors who believed in my vision. Now we're scaling globally with offices in 3 countries.",
      rating: 5,
      verified: true,
      stats: {
        funding: "$5M",
        growth: "500%",
        team: "100+"
      }
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "VC Partner",
      category: "investor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      achievement: "$50M Deployed",
      metric: "8 Unicorns",
      story: "This platform has become our primary source for deal flow. The pre-vetted ideas save us countless hours, and the success rate is phenomenal.",
      rating: 5,
      verified: true,
      stats: {
        deals: 45,
        exits: 12,
        portfolio: "$500M"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Serial Entrepreneur",
      category: "ideagenerator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      achievement: "3 Successful Exits",
      metric: "$25M Total",
      story: "Every idea I've pitched here has found the right investors. The ecosystem is incredible - from feedback to funding, everything happens seamlessly.",
      rating: 5,
      verified: true,
      stats: {
        ideas: 5,
        funded: 4,
        exits: 3
      }
    },
    {
      id: 5,
      name: "Rachel Foster",
      role: "Corporate Investor",
      category: "investor",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
      achievement: "15 Acquisitions",
      metric: "$100M+ Value",
      story: "We've acquired multiple startups discovered on this platform. The innovation pipeline here is unmatched. It's transformed our corporate venture strategy.",
      rating: 5,
      verified: true,
      stats: {
        reviewed: 200,
        invested: 30,
        acquired: 15
      }
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Tech Innovator",
      category: "ideagenerator",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150",
      achievement: "IPO Success",
      metric: "$1B Valuation",
      story: "From a simple pitch to IPO in 4 years. The investors I met here didn't just provide capital - they opened doors I never knew existed.",
      rating: 5,
      verified: true,
      stats: {
        raised: "$150M",
        valuation: "$1B",
        markets: "25+"
      }
    }
  ];

  const filteredStories = activeCategory === 'all' 
    ? successStories 
    : successStories.filter(story => story.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  const StoryCard = ({ story, featured = false }) => (
    <div className={`${featured ? 'lg:col-span-2' : ''} bg-white rounded-2xl shadow-xl p-6 lg:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img 
              src={story.image} 
              alt={story.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
            />
            {story.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                <FaAward className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{story.name}</h3>
            <p className="text-gray-600 text-sm">{story.role}</p>
            <div className="flex gap-1 mt-1">
              {[...Array(story.rating)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <FaQuoteRight className="w-8 h-8 text-indigo-100" />
      </div>

      {/* Achievement Badges */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {story.achievement}
        </div>
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {story.metric}
        </div>
      </div>

      {/* Story */}
      <blockquote className="text-gray-700 mb-6 italic text-base leading-relaxed">
        "{story.story}"
      </blockquote>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
        {Object.entries(story.stats).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-xs text-gray-500 capitalize">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaAward className="w-4 h-4" />
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transforming Ideas into
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from investors and innovators who found success through our platform
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-lg p-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeCategory === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Stories
            </button>
            <button
              onClick={() => setActiveCategory('investor')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === 'investor' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaDollarSign className="w-4 h-4" />
              Investors
            </button>
            <button
              onClick={() => setActiveCategory('ideagenerator')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === 'ideagenerator' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <FaLightbulb className="w-4 h-4" />
              Innovators
            </button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStories.map((story, index) => (
            <StoryCard key={story.id} story={story} featured={index === 0} />
          ))}
        </div>

        {/* Mobile Carousel View (Alternative) */}
        <div className="lg:hidden mt-12">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <StoryCard story={filteredStories[currentSlide]} />
            </div>
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <FaChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex gap-2">
                {filteredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <FaChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">$2.5B+</div>
              <div className="text-indigo-100">Total Invested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-indigo-100">Success Stories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">85%</div>
              <div className="text-indigo-100">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Unicorns Created</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 inline-flex items-center gap-2">
            <FaUsers className="w-5 h-5" />
            Join Our Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;