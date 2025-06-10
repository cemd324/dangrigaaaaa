import { Play, Image } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ExperienceSection = () => {
  const [videoModal, setVideoModal] = useState(false);

  return (
    <section className="py-20 bg-[#3434b3] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000000"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience Dangriga
          </h2>
          <p className="text-xl text-white">
            Visualize the Future of Caribbean Cruising
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main feature image */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden shadow-xl group cursor-pointer" onClick={() => setVideoModal(true)}>
            <div className="relative aspect-[16/9]">
              <img 
                src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dangriga Cruise Port Concept" 
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play size={30} className="text-blue-900 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Dangriga Port Concept Video</h3>
                <p className="text-gray-200">Experience our vision for the future of Belizean tourism</p>
              </div>
            </div>
          </div>

          {/* Gallery preview */}
          <div className="grid grid-cols-1 gap-4">
            <div className="text-left mb-2">
              <h3 className="text-2xl font-bold text-white">Conceptual Designs</h3>
              <p className="text-white">Preview our architectural vision and design concepts</p>
            </div>
            
            <Link to="/gallery" className="relative rounded-lg overflow-hidden h-40 shadow-lg group cursor-pointer">
              <img 
                src="https://i.imgur.com/4emRcvy.jpeg" 
                alt="Port Facilities" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/70 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">Port Facilities</p>
                </div>
              </div>
            </Link>
            
            <div className="mt-4">
              <Link 
                to="/gallery" 
                className="inline-flex items-center text-white hover:text-teal-700 font-medium"
              >
                <Image size={18} className="mr-2" />
                Explore Media Gallery
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal - in a real implementation, this would be a proper video player */}
      {videoModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setVideoModal(false)}>
          <div className="max-w-4xl w-full relative">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setVideoModal(false)}
            >
              <X size={24} />
              <span className="sr-only">Close</span>
            </button>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <p className="text-white text-center p-8">Video player would be implemented here in the final version</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Import X from lucide-react
import { X, ArrowRight } from 'lucide-react';

export default ExperienceSection;