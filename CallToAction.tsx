import { Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Learn More?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link 
            to="/contact"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:border-teal-100 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
              <Phone className="text-teal-500" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Contact Our Team</h3>
            <p className="text-gray-600 text-center">Speak with our development team</p>
          </Link>

          <Link 
            to="/contact"
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:border-teal-100 transition-colors duration-300 group"
          >
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
              <MapPin className="text-teal-500" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Schedule Site Visit</h3>
            <p className="text-gray-600 text-center">Experience the location firsthand</p>
          </Link>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/infrastructure-appendix" 
            className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300"
          >
            View Infrastructure Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;