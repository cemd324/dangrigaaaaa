import { Download, FileText } from 'lucide-react';

const DownloadsPage = () => {
  const downloads = [
    {
      icon: <FileText size={24} className="text-teal-500" />,
      title: "Project Documentation",
      description: "Comprehensive project documentation including detailed specifications and development plans.",
      fileSize: "2.1 MB",
      category: "Investment",
      url: "b28f810dc743101dc777036e3689ca2b.pdf"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">
              Download Center
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access comprehensive project documentation, financial models, and investment materials for the Dangriga Cruise Port development.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Available Documents
            </h2>
            <p className="text-xl text-gray-600">
              Download detailed project information and investment materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloads.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-teal-100 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.fileSize}</span>
                  <a
                    href={item.url}
                    download
                    className="inline-flex items-center px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300"
                  >
                    <Download size={16} className="mr-2" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Additional Information?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our investment team is ready to provide additional documentation and answer your questions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:info@portofdangriga.com" 
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300"
              >
                Contact Investment Team
              </a>
              <a 
                href="tel:+525574947268" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md transition duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadsPage;