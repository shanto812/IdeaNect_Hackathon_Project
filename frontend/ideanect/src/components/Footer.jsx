import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane
} from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'For Investors', href: '/investors' },
    { name: 'For Innovators', href: '/innovators' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: FaFacebookF, 
      href: 'https://facebook.com',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'Twitter', 
      icon: FaTwitter, 
      href: 'https://twitter.com',
      color: 'hover:bg-sky-500'
    },
    { 
      name: 'LinkedIn', 
      icon: FaLinkedinIn, 
      href: 'https://linkedin.com',
      color: 'hover:bg-blue-700'
    },
    { 
      name: 'Instagram', 
      icon: FaInstagram, 
      href: 'https://instagram.com',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    },
    { 
      name: 'YouTube', 
      icon: FaYoutube, 
      href: 'https://youtube.com',
      color: 'hover:bg-red-600'
    },
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      href: 'https://github.com',
      color: 'hover:bg-gray-800'
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full filter blur-[128px] opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-[128px] opacity-30"></div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-indigo-100">
                  Get the latest updates on investment opportunities and success stories
                </p>
              </div>
              <div className="lg:ml-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 flex-1 sm:min-w-[300px]"
                  />
                  <button className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                    Subscribe
                    <FaPaperPlane className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center">
                <HiLightBulb className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">IdeaVest</span>
            </div>
            <p className="text-indigo-100 leading-relaxed">
              Connecting visionary entrepreneurs with forward-thinking investors. 
              Transform your ideas into reality and build the future together.
            </p>
            <div className="flex items-center gap-2 text-indigo-200">
              <span className="text-sm">© {currentYear} IdeaVest. All rights reserved.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Quick Links
              <div className="h-px bg-gradient-to-r from-indigo-400 to-transparent flex-1 ml-2"></div>
            </h4>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.name}>
                  <a
                    href={page.href}
                    className="text-indigo-100 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">
                      {page.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Connect With Us
              <div className="h-px bg-gradient-to-r from-indigo-400 to-transparent flex-1 ml-2"></div>
            </h4>
            <p className="text-indigo-100 mb-6">
              Follow us on social media to stay updated with the latest news and opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <p className="text-xs text-indigo-200 mb-2">Platform Stats</p>
              <div className="flex justify-between text-white">
                <div>
                  <div className="font-bold">10K+</div>
                  <div className="text-xs text-indigo-200">Investors</div>
                </div>
                <div>
                  <div className="font-bold">25K+</div>
                  <div className="text-xs text-indigo-200">Ideas</div>
                </div>
                <div>
                  <div className="font-bold">$2.5B</div>
                  <div className="text-xs text-indigo-200">Funded</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              Get In Touch
              <div className="h-px bg-gradient-to-r from-indigo-400 to-transparent flex-1 ml-2"></div>
            </h4>
            <div className="space-y-4">
              <a 
                href="mailto:hello@ideavest.com"
                className="flex items-start gap-4 text-indigo-100 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  
                  <p className="text-sm">support@ideavest.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+1234567890"
                className="flex items-start gap-4 text-indigo-100 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <FaPhoneAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-sm">+1 (555) 123-4567</p>
                  <p className="text-sm">Mon-Fri 9AM-6PM EST</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4 text-indigo-100">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-white">Headquarters</p>
                  <p className="text-sm">Dhaka , Airport</p>
                  <p className="text-sm">Airport, CA 94107</p>
                  <p className="text-sm">Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <a href="/privacy" className="text-indigo-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-indigo-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-indigo-200 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/sitemap" className="text-indigo-200 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
            <div className="flex items-center gap-2 text-indigo-200 text-sm">
              <span>All Rights Reserved</span>
             
              <span>Saif Husain Developer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;