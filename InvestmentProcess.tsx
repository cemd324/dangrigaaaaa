import { Users, FileSearch, Handshake, CheckCircle } from 'lucide-react';

const InvestmentProcess = () => {
  const steps = [
    {
      icon: <Users size={24} className="text-white" />,
      title: "Initial Consultation",
      items: [
        "Discuss investment goals",
        "Review opportunities",
        "Q&A session"
      ]
    },
    {
      icon: <FileSearch size={24} className="text-white" />,
      title: "Due Diligence",
      items: [
        "Access data room",
        "Review documentation",
        "Site visits available"
      ]
    },
    {
      icon: <Handshake size={24} className="text-white" />,
      title: "Partnership Structure",
      items: [
        "Define terms",
        "Legal framework",
        "Investment timeline"
      ]
    },
    {
      icon: <CheckCircle size={24} className="text-white" />,
      title: "Closing & Implementation",
      items: [
        "Finalize agreements",
        "Capital deployment",
        "Project participation"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Investment Process
          </h2>
          <p className="text-xl text-gray-300">
            Your Path to Partnership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-blue-900 p-8 rounded-lg shadow-lg border border-blue-700 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {index + 1}. {step.title}
              </h3>
              <ul className="space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    {item}
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

export default InvestmentProcess;