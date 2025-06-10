import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://i.imgur.com/f6icghB.jpeg')` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-900/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Welcome to the Future of <span className="text-teal-400">Belizean Tourism</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mt-6 md:mt-8 max-w-2xl animate-fade-in-up animation-delay-200">
            Discover Dangriga Cruise Port – a visionary project set to redefine travel, trade, and culture in Southern Belize. Positioned in the heart of the Caribbean's most vibrant coastlines, our port is a gateway to extraordinary adventures, sustainable growth, and unique investment opportunities.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8 md:mt-10 animate-fade-in-up animation-delay-400">
            <Link 
              to="/about" 
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300 flex items-center"
            >
              Explore the Project
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <Link 
              to="/investment" 
              className="px-6 py-3 bg-transparent border-2 border-white hover:border-teal-400 text-white hover:text-teal-400 font-medium rounded-md transition duration-300"
            >
              Investment Opportunities
            </Link>
            
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;