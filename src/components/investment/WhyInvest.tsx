import { Users, Crown, DollarSign, Sprout } from 'lucide-react';

const WhyInvest = () => {
  const reasons = [
    {
      icon: <Users size={24} className="text-teal-500" />,
      title: "Proven Market Demand",
      points: [
        "150,000+ projected annual visitors",
        "Strategic location on established cruise routes",
        "Growing Caribbean cruise market"
      ]
    },
    {
      icon: <Crown size={24} className="text-teal-500" />,
      title: "Government-Backed Security",
      points: [
        "Long-term concession secured",
        "Full regulatory support",
        "Project assets as collateral"
      ]
    },
    {
      icon: <DollarSign size={24} className="text-teal-500" />,
      title: "Diversified Revenue Model",
      points: [
        "Port fees and passenger levies",
        "Retail and commercial leases",
        "Hospitality and entertainment",
        "Excursion commissions"
      ]
    },
    {
      icon: <Sprout size={24} className="text-teal-500" />,
      title: "Sustainable Growth",
      points: [
        "5-year strategic growth plan",
        "Phased development approach",
        "Environmental sustainability focus"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Why Invest in Dangriga Cruise Port?
          </h2>
          <p className="text-xl text-gray-600">
            A unique opportunity to be part of Belize's tourism transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:border-teal-100 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900">{reason.title}</h3>
              </div>
              <ul className="space-y-3">
                {reason.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;