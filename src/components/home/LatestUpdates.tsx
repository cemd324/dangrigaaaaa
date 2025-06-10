import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestUpdates = () => {
  const updates = [
    {
      title: "Legacy Holding Study Identifies Key Tourist Attractions Near Dangriga Port",
      description: "Legacy Holding has completed an initial regional study aimed at evaluating the tourism potential of the area surrounding the future site of the Dangriga Port.",
      date: "May 21, 2025",
      readTime: "3 min read",
      image: "https://i.imgur.com/sHVR2MQ.jpeg",
      link: "/articles/legacy-holding-study"
    },
    {
      title: "Legacy Holding of Mexico Engaged to Support the Dangriga Port Development",
      description: "The private consortium leading the Dangriga Port Project is proud to announce the formal engagement of Legacy Holding, a Mexico-based investment and development group.",
      date: "May 21, 2025",
      readTime: "4 min read",
      image: "https://i.imgur.com/r7uvPhd.jpeg",
      link: "/articles/legacy-holding-engagement"
    },
    {
      title: "Government of Belize Grants Concession for the Development of the Port of Dangriga",
      description: "The Government of Belize has officially awarded a long-term concession to a private consortium for the development and operation of the new Port of Dangriga, marking a historic step forward in Belize's maritime and economic development.",
      date: "May 15, 2025",
      readTime: "4 min read",
      image: "https://i.imgur.com/v1bzthT.jpeg",
      link: "/articles/government-concession"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay informed about the progress and developments of the Dangriga Cruise Port project.
            </p>
          </div>
          <Link 
            to="/news" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mt-4 md:mt-0"
          >
            View All News
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <Link
              key={index}
              to={update.link}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={update.image} 
                  alt={update.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-1" />
                  <span>{update.date}</span>
                  <span className="mx-2">•</span>
                  <Clock size={16} className="mr-1" />
                  <span>{update.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{update.title}</h3>
                <p className="text-gray-600 mb-4">{update.description}</p>
                <span className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center">
                  Read More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;