import { ChevronDown } from 'lucide-react';

const ProjectOverview = () => {
  const stats = [
    {
      icon: "https://i.imgur.com/Sj4uTtp.png",
      label: "Location",
      value: "Dangriga, Southern Belize",
      bgColor: "bg-green-200",
      textColor: "text-green-900"
    },
    {
      icon: "https://i.imgur.com/kjUYEWb.png",
      label: "Total Investment",
      value: "$131,000,000 USD",
      bgColor: "bg-green-800",
      textColor: "text-green-100"
    },
    {
      icon: "https://i.imgur.com/K8hKpwI.png",
      label: "Projected Annual Visitors",
      value: "+ 500 000",
      bgColor: "bg-purple-500",
      textColor: "text-purple-100"
    },
    {
      icon: "https://i.imgur.com/WZGbaeP.png",
      label: "Target Opening",
      value: "2026",
      bgColor: "bg-yellow-600",
      textColor: "text-yellow-100"
    },
    {
      icon: "https://i.imgur.com/SVUd92P.png",
      label: "5-Year Cumulative Local Economic Stimulus",
      value: "Over $450MM USD.",
      bgColor: "bg-yellow-400",
      textColor: "text-yellow-900"
    },
    {
      icon: "https://i.imgur.com/hWO5RVN.png",
      label: "Direct Jobs Created",
      value: "+600 permanent positions",
      bgColor: "bg-green-500",
      textColor: "text-green-100"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Project Overview</h2>
          <p className="text-lg text-white mb-8">
            Dangriga Cruise Port represents a transformative $131 million investment in Belize's tourism infrastructure. This world-class development combines state-of-the-art port facilities with a comprehensive resort complex, creating the Caribbean's newest premier cruise destination.
          </p>
          
          {/* Animated bouncing arrow */}
          <div className="flex justify-center">
            <div className="animate-bounce">
              <ChevronDown size={32} className="text-white" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`${stat.bgColor} p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <img 
                    src={stat.icon} 
                    alt={stat.label} 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className={`${stat.textColor} font-medium opacity-90`}>{stat.label}</h3>
                  <p className={`text-xl font-bold ${stat.textColor}`}>{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white">
            Construction Jobs: <span className="font-bold text-white">700+ positions</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;