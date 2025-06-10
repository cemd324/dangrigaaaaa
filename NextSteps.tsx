import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const NextSteps = () => {
  const resources = [
    {
      title: "Contact Investment Relations",
      items: [
        { name: "Email: invest@dangrigaport.com", link: "mailto:invest@dangrigaport.com" },
        { name: "Phone: +52 55 7494 7268", link: "tel:+525574947268" },
        { name: "WhatsApp: +52 55 7494 7268", link: "https://wa.me/525574947268" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Next Steps
          </h2>
          <p className="text-xl text-gray-600">
            Start Your Investment Journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
          {resources.map((section, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    {item.link ? (
                      <Link to={item.link} className="hover:text-teal-600 transition-colors">
                        {item.name}
                      </Link>
                    ) : (
                      <a href={item.link} className="hover:text-teal-600 transition-colors">
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300"
          >
            Get Started Today
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/infrastructure-appendix" 
            className="inline-flex items-center px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-md transition duration-300"
          >
            View Detailed Infrastructure Components
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;