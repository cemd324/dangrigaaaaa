import { DollarSign, Shield, Users } from 'lucide-react';

const FinancialOverview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Financial Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Project Financials */}
          <div className="bg-blue-900 p-8 rounded-lg shadow-lg border border-blue-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                <DollarSign size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Project Financials</h3>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-300 mb-2">Total Project Investment</p>
                <p className="text-3xl font-bold text-white">$131,000,000 USD</p>
              </div>

              <div>
                <p className="font-medium text-white mb-2">Revenue Projections:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                     5-Year Cumulative Local Economic Stimulus : over $450MM USD.
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Multiple income streams
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Conservative growth estimates
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white mb-2">Investment Protection:</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Secured by project assets
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Government concession rights
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Professional management team
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Financing Structure */}
          <div className="bg-blue-900 p-8 rounded-lg shadow-lg border border-blue-700">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                <Shield size={24} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Financing Structure</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-blue-800 rounded-lg">
                <p className="font-medium text-white">Total Financing Required</p>
                <p className="text-2xl font-bold text-white">$131,000,000 USD</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-800 rounded-lg">
                  <p className="font-medium text-white">Grace Period</p>
                  <p className="text-lg text-gray-300">2 years during construction</p>
                </div>

                <div className="p-4 bg-blue-800 rounded-lg">
                  <p className="font-medium text-white">Term</p>
                  <p className="text-lg text-gray-300">15 years</p>
                </div>
              <div className="p-4 bg-blue-800 rounded-lg">
                <p className="font-medium text-white">Collateral</p>
                <p className="text-lg text-gray-300">Project assets and concession rights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialOverview;