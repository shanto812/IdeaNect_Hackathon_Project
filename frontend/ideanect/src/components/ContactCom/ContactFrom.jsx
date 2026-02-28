import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheckCircle, FiAlertCircle, FiPhone } from 'react-icons/fi';
import { BiPaperPlane } from 'react-icons/bi';
import { HiOutlineSparkles } from 'react-icons/hi';
import { BsBriefcase, BsShieldCheck } from 'react-icons/bs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2;
      setStatus(isSuccess ? 'success' : 'error');
      
      if (isSuccess) {
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      }
      
      setTimeout(() => setStatus(null), 5000);
    }, 1000);
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#5471ff]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8b3ffc]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Premium Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#5471ff]/10 to-[#8b3ffc]/10 border border-[#5471ff]/20 rounded-md mb-8 backdrop-blur-sm">
            <HiOutlineSparkles className="text-[#5471ff] text-xl" />
            <span className="text-[#5471ff] font-bold text-sm uppercase tracking-widest">
              Professional Support
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Let's Connect Your
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5471ff] to-[#8b3ffc]">
              Talent & Vision
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Share your ideas with our expert team. We're committed to helping you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side - Trust Indicators */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Why Choose Us Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-lg flex items-center justify-center">
                  <BsShieldCheck className="text-white text-xl" />
                </div>
                Why Ideanect?
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#5471ff]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheckCircle className="text-[#5471ff]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Verified Professionals</h4>
                    <p className="text-sm text-gray-600">Connect with authenticated investors and experts</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#5471ff]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheckCircle className="text-[#5471ff]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Round-the-clock assistance for all your queries</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#5471ff]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheckCircle className="text-[#5471ff]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Secure Platform</h4>
                    <p className="text-sm text-gray-600">Enterprise-grade security for your data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#5471ff]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheckCircle className="text-[#5471ff]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fast Response</h4>
                    <p className="text-sm text-gray-600">Get replies within 12 hours guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-2xl p-8 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-6">Direct Contact</h3>
              
              <div className="space-y-4">
                <a href="mailto:support@ideanect.com" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <div className="text-xs text-white/80 mb-1">Email Us</div>
                    <div className="font-semibold">support@ideanect.com</div>
                  </div>
                </a>
                
                <a href="tel:+8801234567890" className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all group">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <div className="text-xs text-white/80 mb-1">Call Us</div>
                    <div className="font-semibold">+880 123 456 7890</div>
                  </div>
                </a>
              </div>
            </div>
            
          </div>

          {/* Right Side - Form Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
              
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5471ff]/10 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                
                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheckCircle className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-900 text-xl mb-2">Message Sent Successfully!</h4>
                      <p className="text-green-700 leading-relaxed">
                        Thank you for reaching out to Ideanect. Our team will review your message and respond within 12 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiAlertCircle className="text-white text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-900 text-xl mb-2">Unable to Send Message</h4>
                      <p className="text-red-700 leading-relaxed">
                        We encountered an issue. Please try again or contact us directly at support@ideanect.com
                      </p>
                    </div>
                  </div>
                )}

                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Send Your Message</h3>
                  <p className="text-gray-600">Fill in your details and we'll get back to you promptly</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Full Name */}
                  <div className="group">
                    <label htmlFor="fullName" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5471ff] transition-colors">
                        <FiUser className="text-xl" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g., John Doe"
                        className="w-full pl-14 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-[#5471ff] focus:ring-4 focus:ring-[#5471ff]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5471ff] transition-colors">
                        <FiMail className="text-xl" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g., john@company.com"
                        className="w-full pl-14 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-[#5471ff] focus:ring-4 focus:ring-[#5471ff]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#5471ff] transition-colors">
                        <FiMessageSquare className="text-xl" />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Partnership Inquiry"
                        className="w-full pl-14 pr-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-[#5471ff] focus:ring-4 focus:ring-[#5471ff]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Tell us about your project, inquiry, or how we can help you..."
                        className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-[#5471ff] focus:ring-4 focus:ring-[#5471ff]/10 outline-none transition-all text-gray-900 placeholder:text-gray-400 resize-none font-medium"
                      ></textarea>
                      <div className="absolute right-4 bottom-4 text-xs font-semibold text-gray-400">
                        {formData.message.length} / 1000
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group w-full bg-gradient-to-r from-[#5471ff] via-[#6a5dff] to-[#8b3ffc] text-white font-bold py-5 px-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#5471ff]/40 transition-all duration-300 flex items-center justify-center gap-3 text-lg relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#8b3ffc] to-[#5471ff] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative z-10 flex items-center gap-3">
                        Send Message
                        <BiPaperPlane className="text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </button>
                  </div>

                  {/* Privacy & Security Note */}
                  <div className="pt-4 flex items-start gap-3 p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-[#5471ff]/20">
                    <BsShieldCheck className="text-[#5471ff] text-xl flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">Your privacy matters.</span> All information is encrypted and will never be shared with third parties. We're committed to protecting your data.
                    </p>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default ContactForm;