import React from 'react';
import { FiMail, FiMessageCircle, FiPhone, FiSend } from 'react-icons/fi';
import { HiOutlineChat } from 'react-icons/hi';
import { BsArrowDown } from 'react-icons/bs';

const ContactHero = () => {
  return (
    <section className="relative h-[110vh] -mt-[70px] flex items-center justify-center overflow-hidden font-sans">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')"
        }}
      ></div>
      
      {/* Dark Gradient Overlay - Stronger */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#5471ff]/60 to-[#8b3ffc]/70"></div>
      
      {/* Additional Dark Layer */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <FiMail className="text-white text-2xl" />
        </div>
        <div className="absolute top-48 right-20 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
          <FiPhone className="text-white text-2xl" />
        </div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <FiMessageCircle className="text-white text-2xl" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto font-sans">
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Get in Touch
          <span className="block mt-2">With Ideanect</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          Whether you're an investor seeking opportunities or an entrepreneur with a vision, we're here to connect and collaborate.
        </p>
        
        
        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">24/7</div>
            <div className="text-sm text-white/80 uppercase tracking-wide">Online Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">&lt;12h</div>
            <div className="text-sm text-white/80 uppercase tracking-wide">Quick Reply</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">5K+</div>
            <div className="text-sm text-white/80 uppercase tracking-wide">Connections Made</div>
          </div>
        </div>
        
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <BsArrowDown className="text-white text-3xl opacity-70" />
      </div>
    </section>
  );
};

export default ContactHero;