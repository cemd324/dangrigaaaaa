import { MapPin, DollarSign, Leaf, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyDangriga = () => {
  const features = [
    {
      icon: <MapPin size={24} className="text-teal-500" />,
      title: "Strategic Location",
      description: "Deep-water access on established cruise routes, positioned perfectly along the Caribbean coastline."
    },
    {
      icon: <DollarSign size={24} className="text-teal-500" />,
      title: "Economic Impact",
      description: (
        <>
          <ul className="list-disc pl-5">
            <li>+600 permanent jobs</li>
            <li>5-year Cumulative Local Economic Stimulus: over $450 MM USD</li>
          </ul>
        </>
      )
    },
    {
      icon: <Leaf size={24} className="text-teal-500" />,
      title: "Sustainable Design",
      description: "Environmentally conscious development prioritizing the protection of Belize's natural resources."
    },
    {
      icon: <Building size={24} className="text-teal-500" />,
      title: "Government Support",
      description: "Long-term concession secured with full backing from local and national government entities."
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Dangriga Cruise Port
          </h2>
          <p className="text-xl text-blue-900">
            A World-Class Development in the Heart of the Caribbean
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-blue-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-teal-100 group"
            >
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/about" 
            className="inline-flex items-center text-black hover:text-teal-700 font-medium"
          >
            Learn More About Our Vision
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyDangriga;