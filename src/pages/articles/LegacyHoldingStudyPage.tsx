import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegacyHoldingStudyPage = () => {
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
              <span>May 21, 2025</span>
              <span className="mx-2">•</span>
              <Clock size={16} className="mr-1" />
              <span>3 min read</span>
            </div>
            
            <span className="inline-block px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full mb-6">
              Tourism Study
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">
              Legacy Holding Study Identifies Key Tourist Attractions Near Dangriga Port
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://i.imgur.com/sHVR2MQ.jpeg" 
              alt="Legacy Holding Study" 
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Dangriga, Belize – Legacy Holding has completed an initial regional study aimed at evaluating the tourism potential of the area surrounding the future site of the Dangriga Port. The study has identified a variety of important and unique tourist attractions located within one hour by road from the port. These include cultural heritage sites, ecological reserves, pristine beaches, and vibrant local communities offering authentic Belizean experiences.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                As part of the study, Legacy Holding has developed a detailed visitor map to illustrate the strategic location of the Dangriga Port in relation to these key tourist attractions. The proximity to these destinations enhances the commercial appeal of the project and strengthens its value proposition as a central hub for both cruise and private maritime tourism.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                This development further solidifies the rationale and potential for the Dangriga Port Project and supports the projected long-term success of the initiative. In the next phase, Legacy Holding will be coordinating closely with local tourism boards, municipalities, and community leaders to ensure that the identified attractions are adequately prepared to receive and host international visitors.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The Dangriga Port Project, a partnership between the Government of Belize, Commerce Bight of Belize, and Legacy Holding, aims to create a state-of-the-art port and resort complex that promotes economic development, job creation, and sustainable tourism across the region.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Legacy Holding reaffirms its commitment to building a project that not only meets global infrastructure standards but also respects and elevates the unique cultural and natural assets of southern Belize.
              </p>
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
              
              <Link 
                to="/articles/government-concession"
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src="https://i.imgur.com/v1bzthT.jpeg" 
                  alt="Government Concession" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Government of Belize Grants Concession for the Development of the Port of Dangriga</h3>
                  <p className="text-gray-600">The Government of Belize has officially awarded a long-term concession to a private consortium...</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyHoldingStudyPage;