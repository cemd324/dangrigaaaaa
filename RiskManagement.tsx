import { Shield, FileText } from 'lucide-react';

const RiskManagement = () => {
  const strategies = [
    "Government backing and support",
    "Diversified revenue streams",
    "Phased development approach",
    "Professional management team",
    "Insurance and contingencies"
  ];

  const diligence = [
    "Environmental assessments",
    "Market studies",
    "Financial projections",
    "Legal documentation",
    "Technical specifications"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Risk Management
          </h2>
          <p className="text-xl text-gray-600">
            Protecting Your Investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                <Shield size={24} className="text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Mitigation Strategies</h3>
            </div>
            <ul className="space-y-3">
              {strategies.map((strategy, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                <FileText size={24} className="text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-blue-900">Due Diligence Available</h3>
            </div>
            <ul className="space-y-3">
              {diligence.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskManagement;