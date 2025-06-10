import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const GovernmentConcessionPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/news"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to News
            </Link>
            
            <div className="flex items-center text-sm text-blue-200 mb-4">
              <Calendar size={16} className="mr-1" />
              <span>May 15, 2025</span>
              <span className="mx-2">•</span>
              <Clock size={16} className="mr-1" />
              <span>4 min read</span>
            </div>
            
            <span className="inline-block px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full mb-6">
              Government Announcement
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">
              Government of Belize Grants Concession for the Development of the Port of Dangriga
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://i.imgur.com/v1bzthT.jpeg" 
              alt="Government Concession" 
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                <strong>Dangriga, Belize — 15 May, 2025</strong>
              </p>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                The Government of Belize has officially awarded a long-term concession to a private consortium for the development and operation of the new Port of Dangriga, marking a historic step forward in Belize's maritime and economic development.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                This new port will be a state-of-the-art, multipurpose maritime facility, designed to serve as a strategic hub for cruise ship tourism and local economic integration. The initiative is expected to bring transformational benefits not only to the Dangriga area and surrounding communities, but to the entire country of Belize by improving connectivity, generating employment, and supporting sustainable tourism.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The concession was granted to a private group that includes both Belizean stakeholders and international investors, who will lead the financing, development, and execution of the port through a public-private partnership structure. The Government of Belize will retain a strategic stake in the port through a 20% ownership position, ensuring national interests remain represented throughout the project's lifecycle.
              </p>
              
              <blockquote className="border-l-4 border-teal-500 pl-6 my-8 italic text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                "This port represents a bold and forward-thinking vision for the future of Belizean trade and tourism. We are proud to partner with the Government of Belize and the local community to make this project a reality."
                <footer className="mt-4 text-sm text-gray-600">
                  — Spokesperson from the consortium
                </footer>
              </blockquote>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Port of Dangriga will be designed with world-class infrastructure, sustainable practices, and modern port operations. It will include dedicated zones for cruise terminals, cargo handling, passenger services, commercial activity, and hospitality, all integrated within a master plan that honors the cultural and ecological heritage of the region.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Further details—including design visuals, project timeline, and investment partnerships—will be shared in the coming weeks via official channels and the Port of Dangriga website.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">For media inquiries:</h3>
                <p className="text-gray-700">
                  <a href="mailto:info@dangrigaport.com" className="text-teal-600 hover:text-teal-700">
                    info@dangrigaport.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                to="/articles/legacy-holding-study"
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://i.imgur.com/sHVR2MQ.jpeg" 
                  alt="Legacy Holding Study" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Legacy Holding Study Identifies Key Tourist Attractions Near Dangriga Port</h3>
                  <p className="text-gray-600">Legacy Holding has completed an initial regional study aimed at evaluating the tourism potential...</p>
                </div>
              </Link>
              
              <Link 
                to="/articles/legacy-holding-engagement"
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://i.imgur.com/r7uvPhd.jpeg" 
                  alt="Legacy Holding Engagement" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Legacy Holding of Mexico Engaged to Support the Dangriga Port Development</h3>
                  <p className="text-gray-600">The private consortium leading the Dangriga Port Project is proud to announce the formal engagement of Legacy Holding...</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentConcessionPage;