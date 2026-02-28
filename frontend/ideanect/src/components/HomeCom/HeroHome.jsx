import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="relative h-[110vh] w-full overflow-hidden mt-[-70px]">
      {/* Full Width Background Image with Overlay */}
      <div className="absolute inset-0 w-full">
        <img 
          src="https://images.unsplash.com/photo-1638262052640-82e94d64664a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
          alt="Investor handshake" 
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
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6  uppercase bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent">
             Share your startup idea & 
               <span className="block mt-2">connect with real investors.</span>
            </h1>

            {/* Subtitle (optional) */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Transform your vision into reality by connecting with investors who believe in your potential
            </p>

            {/* Buttons Container */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Post Your Idea Button */}
              <Link to='/login'>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Post Your Idea
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] rounded-md blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
              </Link>

              {/* Explore Ideas Button */}
              <Link to='/ideas'>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Explore Ideas
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5471ff] to-[#8b3ffc] rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
              </Link>
            </div>

            {/* Optional: Stats or Trust Indicators */}
            <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
              <div className="text-center">
                <div className="text-3xl font-bold">129+</div>
                <div className="text-sm">Active Investors</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">900+</div>
                <div className="text-sm">Startup Ideas</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">$1.5M</div>
                <div className="text-sm">Funded</div>
              </div>
            </div>
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

export default HeroSection;