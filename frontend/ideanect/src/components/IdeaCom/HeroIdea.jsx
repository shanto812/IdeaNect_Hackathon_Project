import React from 'react';

const HeroIdea = () => {
  return (
    <section className="relative h-[110vh] w-full overflow-hidden mt-[-70px]">
      {/* Full Width Background Image with Overlay */}
      <div className="absolute inset-0 w-full">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
          alt="Creative ideas and innovation" 
          className="h-full w-full object-cover bg-black/10 backdrop-blur-md"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content Container - max-w-7xl */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Main Title */}
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent">
              Discover Groundbreaking 
              <span className="block mt-2">Startup Ideas</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Explore innovative concepts from visionary entrepreneurs and find your next investment opportunity
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroIdea;