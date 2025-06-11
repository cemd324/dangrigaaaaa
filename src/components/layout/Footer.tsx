import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and brief description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img 
                  src="https://i.imgur.com/8R9zHDH.jpeg" 
                  alt="Port of Dangriga Logo" 
                  className="h-12 w-auto rounded-xl"
                />
              </Link>
              <span className="text-white mx-2">by</span>
              <button
                onClick={() => window.open('https://www.thelegacyholding.com/', '_blank')}
                className="bg-white p-2 rounded-xl hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://i.imgur.com/r7uvPhd.jpeg" 
                  alt="Legacy Holding Logo" 
                  className="h-6 w-auto"
                />
              </button>
            </div>
            <p className="text-gray-300 text-sm mt-4">
              A visionary project set to redefine travel, trade, and culture in Southern Belize, opening new gateways to extraordinary adventures.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-teal-400"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About the Project
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Investment Opportunities
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  News & Updates
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-teal-400 transition-colors inline-flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-teal-400"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="text-teal-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+52 55 7494 7268</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-teal-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@portofdangriga.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                  info@portofdangriga.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} Dangriga Cruise Port. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;