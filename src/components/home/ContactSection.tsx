import { Mail, Calendar, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-blue-800">
            Ready to be part of this transformative project?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-blue-900 p-8 rounded-lg shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info and CTAs */}
          <div className="space-y-8">
            <div className="bg-[#3434b3] p-8 rounded-lg border border-blue-100">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="text-teal-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <a href="mailto:info@dangrigaport.com" className="text-teal-300 hover:text-teal-100 transition-colors">
                      info@dangrigaport.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-teal-400 mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">Call Us</p>
                    <a href="tel:+525574947268" className="text-teal-300 hover:text-teal-100 transition-colors">
                      +52 55 7494 7268
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;