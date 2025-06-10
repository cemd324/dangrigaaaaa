import { Users, Handshake, PieChart, Wallet } from 'lucide-react';

const PartnershipModels = () => {
  const models = [
    {
      title: "Equity Investment",
      icon: <PieChart className="w-12 h-12 text-black" />,
      features: [
        "Direct ownership stake in the project",
        "Proportional share of profits",
        "Board representation opportunities",
        "Long-term capital appreciation"
      ]
    },
    {
      title: "Joint Venture Partnerships",
      icon: <Handshake className="w-12 h-12 text-black" />,
      features: [
        "Strategic partnerships for specific components",
        "Shared expertise and resources",
        "Risk mitigation through collaboration",
        "Operational involvement options"
      ]
    },
    {
      title: "Revenue-Sharing Agreements",
      icon: <Users className="w-12 h-12 text-black" />,
      features: [
        "Performance-based returns",
        "Lower initial capital requirements",
        "Flexible partnership terms",
        "Specific sector opportunities"
      ]
    },
    {
      title: "Debt Financing",
      icon: <Wallet className="w-12 h-12 text-black" />,
      features: [
        "Fixed returns through lending",
        "Secured by project assets",
        "Predictable income stream",
        "Priority payment position"
      ]
    }
  ];

  return (
    <section className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Partnership Models
          </h2>
          <p className="text-xl text-blue-100">
            Choose Your Investment Approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg p-8 shadow-lg border border-blue-200 hover:border-blue-300 transition-colors duration-300"
            >
              <div className="mb-6 flex justify-center">{model.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">{model.title}</h3>
              <ul className="space-y-3">
                {model.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span className="text-blue-800">{feature}</span>
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

export default PartnershipModels;