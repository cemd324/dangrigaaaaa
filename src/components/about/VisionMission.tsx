import { Telescope, Target } from 'lucide-react';

const VisionMission = () => {
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">About the Project</h1>
          <p className="text-xl text-teal-300">Our Vision & Mission</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-teal-400/50 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                <Telescope className="text-teal-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Vision</h2>
            </div>
            <p className="text-gray-200 leading-relaxed">
              To create a world-class cruise port that integrates seamlessly with the rich cultural and natural beauty of Southern Belize, promoting sustainable tourism and regional development.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-teal-400/50 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-teal-400" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Mission</h2>
            </div>
            <p className="text-gray-200 leading-relaxed">
              Deliver a premier port experience for cruise passengers while fostering economic vitality for local communities and providing lucrative returns for our partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;