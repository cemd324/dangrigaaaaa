import { Leaf, Droplets, Recycle, Fish, Heart } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: <Leaf size={24} className="text-teal-500" />,
      title: "Energy-efficient building designs"
    },
    {
      icon: <Droplets size={24} className="text-teal-500" />,
      title: "Water conservation systems"
    },
    {
      icon: <Recycle size={24} className="text-teal-500" />,
      title: "Waste management and recycling programs"
    },
    {
      icon: <Fish size={24} className="text-teal-500" />,
      title: "Protection of marine ecosystems"
    },
    {
      icon: <Heart size={24} className="text-teal-500" />,
      title: "Support for local conservation initiatives"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#94e087' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Sustainability Commitment
          </h2>
          <p className="text-lg text-gray-600">
            Our development prioritizes environmental protection and sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {initiatives.map((initiative, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-100 hover:border-teal-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {initiative.icon}
              </div>
              <p className="text-gray-800 font-medium">{initiative.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;