import { Anchor, Crown, DollarSign, Compass, Leaf, Clock } from 'lucide-react';

const KeyFactors = () => {
  const advantages = [
    {
      icon: <Anchor size={24} className="text-white" />,
      title: "Prime Location",
      description: "Deep-water access on established Caribbean cruise routes"
    },
    {
      icon: <Crown size={24} className="text-white" />,
      title: "Government Support",
      description: "Long-term concession secured with full regulatory backing"
    },
    {
      icon: <DollarSign size={24} className="text-white" />,
      title: "Diversified Revenue",
      description: "Multiple income streams from port fees, retail, hospitality, and excursions"
    },
    {
      icon: <Compass size={24} className="text-white" />,
      title: "Market Demand",
      description: "Growing interest in eco-tourism and authentic Caribbean experiences"
    },
    {
      icon: <Leaf size={24} className="text-white" />,
      title: "Sustainable Design",
      description: "Environmentally conscious development ensuring long-term viability"
    },
    {
      icon: <Clock size={24} className="text-white" />,
      title: "Phased Construction",
      description: "Risk-managed approach to development and investment"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Key Success Factors
          </h2>
          <p className="text-xl text-gray-600">
            Strategic advantages that position Dangriga Cruise Port for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-blue-900 p-6 rounded-lg shadow-lg border border-gray-100 hover:border-teal-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
              <p className="text-white">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFactors;