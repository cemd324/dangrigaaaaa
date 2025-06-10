import { Building2, Utensils, Store, Landmark, HeartPulse, Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const InfrastructureAppendixPage = () => {
  const infrastructureComponents = [
    {
      title: "Port Terminal Infrastructure",
      icon: <Building2 size={24} className="text-teal-500" />,
      description: "Core port terminal building for passenger check-in and operations"
    },
    {
      title: "Passenger Processing & Security Systems",
      icon: <Building2 size={24} className="text-teal-500" />,
      description: "Facilities for customs, immigration, and security clearance"
    },
    {
      title: "Cruise Berths and Marine Structures",
      icon: <Building2 size={24} className="text-teal-500" />,
      description: "Docks and marine structures for cruise ship berthing"
    },
    {
      title: "Customs, Immigration & Support Facilities",
      icon: <Building2 size={24} className="text-teal-500" />,
      description: "Support offices and services for border and security agencies"
    },
    {
      title: "Seafront Restaurants",
      icon: <Utensils size={24} className="text-teal-500" />,
      description: "Dining venues with beachfront views for tourists and visitors"
    },
    {
      title: "Bars and Lounges",
      icon: <Utensils size={24} className="text-teal-500" />,
      description: "Lounge and bar spaces for food and beverage service"
    },
    {
      title: "Boutique Casino",
      icon: <Store size={24} className="text-teal-500" />,
      description: "Compact gaming facility to enhance entertainment offering"
    },
    {
      title: "Retail Shopping Center",
      icon: <Store size={24} className="text-teal-500" />,
      description: "Retail shops including local and international brands"
    },
    {
      title: "Handicrafts Market",
      icon: <Store size={24} className="text-teal-500" />,
      description: "Stalls for artisans to sell handmade crafts and souvenirs"
    },
    {
      title: "Cultural Center & Gallery",
      icon: <Landmark size={24} className="text-teal-500" />,
      description: "Venue to showcase Belizean art and cultural exhibits"
    },
    {
      title: "Wellness and Spa",
      icon: <HeartPulse size={24} className="text-teal-500" />,
      description: "Spa services including massage, sauna, and wellness therapies"
    },
    {
      title: "Fitness Center",
      icon: <HeartPulse size={24} className="text-teal-500" />,
      description: "Modern gym and fitness space for guests and staff"
    },
    {
      title: "Family Entertainment Zone",
      icon: <Store size={24} className="text-teal-500" />,
      description: "Entertainment arcade and family recreational zone"
    },
    {
      title: "Supermarket & Pharmacy",
      icon: <Store size={24} className="text-teal-500" />,
      description: "Convenience store and small pharmacy for essentials"
    },
    {
      title: "Medical Center",
      icon: <HeartPulse size={24} className="text-teal-500" />,
      description: "Medical point for basic healthcare and first aid services"
    },
    {
      title: "Tour Operator Office",
      icon: <Building2 size={24} className="text-teal-500" />,
      description: "Information and booking office for tours and activities"
    },
    {
      title: "Convention/Event Center",
      icon: <Landmark size={24} className="text-teal-500" />,
      description: "Multipurpose space for events, conferences, and expos"
    },
    {
      title: "Boutique Hotel (40–60 rooms)",
      icon: <Building2 size={24} className="text-teal-500" />,
      description: "Small hotel offering boutique accommodations for visitors"
    },
    {
      title: "Coworking Center",
      icon: <Building2 size={24} className="text-teal-500" />,
      description: "Shared workspace for business visitors and digital nomads"
    },
    {
      title: "Vehicle & Bus Parking",
      icon: <Wrench size={24} className="text-teal-500" />,
      description: "Parking lots for private vehicles and taxis"
    },
    {
      title: "Walkways, Gardens, and Landscaping",
      icon: <Wrench size={24} className="text-teal-500" />,
      description: "Pedestrian-friendly walkways and green landscaping"
    },
    {
      title: "Tourist Pier & Recreational Zone",
      icon: <Wrench size={24} className="text-teal-500" />,
      description: "Leisure pier and boardwalk for recreational use"
    },
    {
      title: "Food Truck/Gourmet Market Zone",
      icon: <Utensils size={24} className="text-teal-500" />,
      description: "Gourmet food truck park with varied culinary options"
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
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/about"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to About
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-[35px]">
              Appendix One: Infrastructure Components and Descriptions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive overview of all infrastructure components planned for the Dangriga Cruise Port development.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Components */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureComponents.map((component, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-teal-100 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                    {component.icon}
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">{component.title}</h3>
                </div>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore More
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Learn more about the project and investment opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/about" 
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300"
              >
                About the Project
              </Link>
              <Link 
                to="/investment" 
                className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md transition duration-300"
              >
                Investment Opportunities
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 border-2 border-white hover:bg-white/10 text-white font-medium rounded-md transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructureAppendixPage;