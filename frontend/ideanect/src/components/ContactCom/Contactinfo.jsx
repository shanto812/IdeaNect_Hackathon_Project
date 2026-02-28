import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiNavigation } from 'react-icons/fi';
import { BsWhatsapp, BsEnvelope, BsTelephone } from 'react-icons/bs';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdAccessTime } from 'react-icons/md';

const ContactInformation = () => {
  const contactDetails = [
    {
      icon: <HiOutlineOfficeBuilding />,
      title: "Visit Our Office",
      info: "House 45, Road 12, Banani",
      subInfo: "Dhaka 1213, Bangladesh",
      action: "Get Directions",
      link: "https://maps.google.com/?q=Banani,Dhaka,Bangladesh",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      info: "+880 1712-345678",
      subInfo: "Mon-Sat, 9:00 AM - 6:00 PM",
      action: "Call Now",
      link: "tel:+8801712345678",
      color: "from-[#5471ff] to-[#8b3ffc]"
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      info: "contact@ideanect.com",
      subInfo: "We reply within 24 hours",
      action: "Send Email",
      link: "mailto:contact@ideanect.com",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <BsWhatsapp />,
      title: "WhatsApp",
      info: "+880 1712-345678",
      subInfo: "Quick support available",
      action: "Chat Now",
      link: "https://wa.me/8801712345678",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How to Reach Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multiple ways to connect with our team
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all group">
              <div className={`w-14 h-14 bg-gradient-to-br ${detail.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                <div className="text-white text-2xl">{detail.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{detail.title}</h3>
              <p className="text-gray-700 font-semibold mb-1">{detail.info}</p>
              <p className="text-sm text-gray-500 mb-4">{detail.subInfo}</p>
              <a 
                href={detail.link}
                target={detail.link.startsWith('http') ? '_blank' : undefined}
                rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-[#5471ff] font-semibold text-sm hover:underline"
              >
                {detail.action}
                <FiNavigation className="text-xs" />
              </a>
            </div>
          ))}
        </div>
        
        {/* Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 overflow-hidden">
               {/* Right - Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.39218203498039!3d23.79366398392786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1fffffff%3A0xb0f958e0a5d0c5f9!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
              
              {/* Or use actual Google Maps */}
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.254272231177!2d90.39218203498039!3d23.79366398392786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a1fffffff%3A0xb0f958e0a5d0c5f9!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe> */}
            </div>
          </div>
          
          {/* Working Hours */}
          <div className="bg-gradient-to-br from-[#5471ff] to-[#8b3ffc] rounded-2xl p-8 shadow-lg text-white">
            <div className="flex items-center gap-3 mb-6">
              <MdAccessTime className="text-4xl" />
              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">Monday - Friday</span>
                </div>
                <div className="text-white/90">9:00 AM - 6:00 PM</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">Saturday</span>
                </div>
                <div className="text-white/90">10:00 AM - 4:00 PM</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold">Sunday</span>
                </div>
                <div className="text-red-300">Closed</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/80">
                <strong>Note:</strong> During public holidays, our office remains closed. Please check our social media for updates.
              </p>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ContactInformation;