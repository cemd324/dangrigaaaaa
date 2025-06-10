import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">
            Transform Caribbean Tourism.<br />
            <span className="text-teal-400">Generate Exceptional Returns.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join us in developing Dangriga Cruise Port – a landmark $131 million infrastructure project that will establish Belize as a premier Caribbean cruise destination while delivering strong returns to our investment partners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentHero;