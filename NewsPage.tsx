import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const articles = [
    {
      title: "Legacy Holding Study Identifies Key Tourist Attractions Near Dangriga Port",
      excerpt: "Legacy Holding has completed an initial regional study aimed at evaluating the tourism potential of the area surrounding the future site of the Dangriga Port.",
      date: "May 21, 2025",
      readTime: "3 min read",
      category: "Tourism Study",
      image: "https://i.imgur.com/sHVR2MQ.jpeg",
      link: "/articles/legacy-holding-study"
    },
    {
      title: "Legacy Holding of Mexico Engaged to Support the Dangriga Port Development",
      excerpt: "The private consortium leading the Dangriga Port Project is proud to announce the formal engagement of Legacy Holding, a Mexico-based investment and development group.",
      date: "May 21, 2025",
      readTime: "4 min read",
      category: "Partnership Announcement",
      image: "https://i.imgur.com/r7uvPhd.jpeg",
      link: "/articles/legacy-holding-engagement"
    },
    {
      title: "Government of Belize Grants Concession for the Development of the Port of Dangriga",
      excerpt: "The Government of Belize has officially awarded a long-term concession to a private consortium for the development and operation of the new Port of Dangriga, marking a historic step forward in Belize's maritime and economic development.",
      date: "May 15, 2025",
      readTime: "4 min read",
      category: "Government Announcement",
      image: "https://i.imgur.com/v1bzthT.jpeg",
      link: "/articles/government-concession"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">News & Updates</h1>
            <p className="text-xl text-blue-100">
              Stay informed about the latest developments at Dangriga Cruise Port
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={article.link}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <Clock size={16} className="mr-1" />
                    <span>{article.readTime}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-sm font-medium rounded-full mb-3">
                    {article.category}
                  </span>
                  <h2 className="text-xl font-bold text-blue-900 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium">
                    Read More
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest project updates and announcements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300"
              >
                Contact Us for Updates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;