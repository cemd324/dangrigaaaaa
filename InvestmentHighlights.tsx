import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentHighlights = () => {
  return (
    <section className="py-20 bg-blue-900 text-white relative">
      {/* Wave decoration at the top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 w-full h-auto -translate-y-0.5"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,186.7C840,181,960,139,1080,133.3C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment Highlights
          </h2>
          <p className="text-xl text-teal-300">
            Join Us in Transforming Belize's Tourism Industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Cost */}
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-700 hover:border-teal-400 transition-colors duration-300 shadow-lg text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 mb-6 shadow-md">
              <img 
                src="https://i.imgur.com/V4GSV5b.png" 
                alt="Dollar icon" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Total Project Cost</h3>
            <p className="text-5xl font-bold text-teal-300 my-4">$131 Million USD</p>
            <p className="text-gray-300">Comprehensive development spanning port facilities, retail spaces, and infrastructure.</p>
          </div>
          
          {/* Annual Visitors */}
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-700 hover:border-teal-400 transition-colors duration-300 shadow-lg text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 mb-6 shadow-md">
              <img 
                src="https://i.imgur.com/rMHPwJB.png" 
                alt="Visitors icon" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Projected Annual Visitors</h3>
            <p className="text-5xl font-bold text-teal-300 my-4">+ 500 000</p>
            <p className="text-gray-300">Cruisers and tourists expected to explore Dangriga annually.</p>
          </div>
          
          {/* Revenue Streams */}
          <div className="bg-blue-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-700 hover:border-teal-400 transition-colors duration-300 shadow-lg text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 mb-6 shadow-md">
              <img 
                src="https://i.imgur.com/N4PQUJY.png" 
                alt="Revenue icon" 
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Revenue Streams</h3>
            <p className="text-teal-300 my-4">
              <span className="block mb-2 text-lg font-medium">Diversified Income Sources</span>
              <span className="text-gray-300 block">Port fees • Retail • Hospitality • Excursions</span>
            </p>
            <p className="text-gray-300">Multiple avenues for sustainable, long-term returns on investment.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <Link 
            to="/investment" 
            className="px-6 py-3 bg-transparent border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-blue-900 font-medium rounded-md transition duration-300 flex items-center"
          >
            Explore Opportunities
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHighlights;