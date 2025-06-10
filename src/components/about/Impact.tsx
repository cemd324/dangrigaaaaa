import { Users, TrendingUp, Building } from 'lucide-react';

const Impact = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Economic & Social Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Job Creation */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6">
              <Users className="text-teal-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Job Creation</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Construction Phase: 700+ direct employment opportunities</li>
              <li>Operational Phase: 600+ permanent positions in hospitality, maintenance, security, and administration</li>
              <li>Indirect Employment: 1,000+ jobs through tourism services and supply chain activities</li>
            </ul>
          </div>

          {/* Economic Benefits */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="text-teal-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Economic Benefits</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Significant GDP contribution through increased tourist spending (5-Year Cumulative Local Economic Stimulus: over $450MM USD.)</li>
              <li>Substantial port fees and tax revenues for national development</li>
              <li>Catalyst for regional business growth and investment</li>
              <li>Skills training and career advancement for local workforce</li>
            </ul>
          </div>

          {/* Community Development */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mb-6">
              <Building className="text-teal-400" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Community Development</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Partnership opportunities for local businesses</li>
              <li>Preservation and promotion of Belizean culture</li>
              <li>Infrastructure improvements benefiting entire region</li>
              <li>Sustainable tourism model protecting natural resources</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;