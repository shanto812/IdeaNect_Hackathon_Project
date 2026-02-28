import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-[110vh] -mt-[70px] flex items-center justify-center overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-blue-300 tracking-wide">
            Trusted by 10,000+ Entrepreneurs
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 space-y-3 font-sans">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight font-sans">
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Innovation</span>
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Investment</span>
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Connect your startup with verified investors ready to fund the next big idea. 
          Launch faster, grow smarter.
        </p>
        

        {/* Stat*/}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">$50M+</div>
            <div className="text-sm text-gray-400 font-medium">Funded</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-gray-400 font-medium">Active Investors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">1,200+</div>
            <div className="text-sm text-gray-400 font-medium">Startups</div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;