import { Clock, TrendingUp, Crown, CheckSquare } from 'lucide-react';

const WhyNow = () => {
  const reasons = [
    {
      icon: <Clock size={24} className="text-white" />,
      title: "Early-Stage Advantages",
      description: "Best terms and positions available",
      bgColor: "bg-green-500"
    },
    {
      icon: <TrendingUp size={24} className="text-white" />,
      title: "Market Timing",
      description: "Caribbean cruise industry recovery and growth",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Crown size={24} className="text-white" />,
      title: "Government Support",
      description: "Current administration fully committed",
      bgColor: "bg-purple-500"
    },
    {
      icon: <CheckSquare size={24} className="text-white" />,
      title: "Construction Ready",
      description: "All permits and approvals in place",
      bgColor: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Now?
          </h2>
          <p className="text-xl text-gray-600">
            The Time to Invest is Today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`${reason.bgColor} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-white/90">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNow;