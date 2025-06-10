import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const LegacyHoldingEngagementPage = () => {
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
              <span>4 min read</span>
            </div>
            
            <span className="inline-block px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full mb-6">
              Partnership Announcement
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">
              Legacy Holding of Mexico Engaged to Support the Dangriga Port Development
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://i.imgur.com/r7uvPhd.jpeg" 
              alt="Legacy Holding Engagement" 
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-8 shadow-lg"
            />
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Dangriga, Belize – May 21, 2025 – The private consortium leading the Dangriga Port Project is proud to announce the formal engagement of Legacy Holding, a Mexico-based investment and development group, to spearhead the conceptual and technical oversight of the new state-of-the-art port facility in Dangriga.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Legacy Holding brings a distinguished record of success in large-scale infrastructure, hospitality, logistics, and development projects across Latin America. With a forward-looking vision and a team of international experts, Legacy has been entrusted with the responsibility of evaluating and shaping the full scope of the Dangriga Port initiative – including preliminary feasibility and environmental impact studies, strategic planning, financial modeling, and capital structuring.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                The project has already generated significant excitement in regional and international development circles, given its potential to transform southern Belize's economic landscape. Once completed, the Dangriga Port will serve as a major hub for cruise tourism and regional commerce, positively impacting job creation, trade efficiency, and tourism development throughout the country.
              </p>
              
              <blockquote className="border-l-4 border-teal-500 pl-6 my-8 italic text-gray-700 bg-gray-50 p-6 rounded-r-lg">
                "Legacy Holding is honored to collaborate on a project that is so vital to Belize's future. We believe the Dangriga Port will become a beacon of sustainable development in Central America, combining world-class port infrastructure with meaningful community and environmental impact."
                <footer className="mt-4 text-sm text-gray-600">
                  — Mario Búcaro, Vice President of International Relations at Legacy Holding
                </footer>
              </blockquote>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Additional updates will be provided in the coming weeks as feasibility studies and stakeholder meetings continue. Legacy Holding is already coordinating with international development institutions for potential financing participation.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">About Legacy Holding</h3>
                <p className="text-gray-700">
                  Legacy Holding is a diversified investment and development group based in Mexico, with a footprint across Latin America. The company specializes in infrastructure, tourism, renewable energy, and strategic public-private partnerships, delivering innovation, efficiency, and long-term value.
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

export default LegacyHoldingEngagementPage;