import { Building2, Utensils, Store, Landmark, HeartPulse, Wrench } from 'lucide-react';

const Infrastructure = () => {
  const sections = [
    {
      title: "Port & Marine Infrastructure",
      icon: <Building2 size={24} className="text-teal-500" />,
      items: [
        { name: "Port Terminal Building", description: "Modern passenger check-in and operations center", cost: "$35.5M" },
        { name: "Cruise Berths & Marine Structures", description: "Deep-water docks for cruise ship berthing", cost: "$23.7M" },
        { name: "Passenger Processing Systems", description: "Advanced customs, immigration, and security clearance", cost: "$6.9M" },
        { name: "Support Facilities", description: "Government agency offices and services", cost: "$3.9M" }
      ]
    },
    {
      title: "Hospitality & Dining",
      icon: <Utensils size={24} className="text-teal-500" />,
      items: [
        { name: "Seafront Restaurants", description: "Multiple dining venues with beachfront views", cost: "$3.0M" },
        { name: "Bars and Lounges", description: "Premium beverage service spaces", cost: "$1.6M" },
        { name: "Food Truck/Gourmet Market Zone", description: "Diverse culinary options", cost: "$1.2M" },
        { name: "Boutique Hotel", description: "40-60 room luxury accommodations", cost: "$6.9M" }
      ]
    },
    {
      title: "Retail & Entertainment",
      icon: <Store size={24} className="text-teal-500" />,
      items: [
        { name: "Retail Shopping Center", description: "Local and international brands", cost: "$7.9M" },
        { name: "Handicrafts Market", description: "Authentic Belizean artisan stalls", cost: "$1.6M" },
        { name: "Boutique Casino", description: "Gaming entertainment facility", cost: "$2.0M" },
        { name: "Family Entertainment Zone", description: "Arcade and recreational activities", cost: "$1.4M" }
      ]
    },
    {
      title: "Cultural & Wellness",
      icon: <Landmark size={24} className="text-teal-500" />,
      items: [
        { name: "Cultural Center & Gallery", description: "Belizean art and cultural exhibits", cost: "$1.2M" },
        { name: "Wellness and Spa", description: "Full-service spa with massage and therapies", cost: "$1.8M" },
        { name: "Fitness Center", description: "Modern gym facilities", cost: "$1.2M" },
        { name: "Convention/Event Center", description: "Multipurpose venue for events and conferences", cost: "$2.0M" }
      ]
    },
    {
      title: "Support Services",
      icon: <HeartPulse size={24} className="text-teal-500" />,
      items: [
        { name: "Medical Center", description: "Healthcare and first aid services", cost: "$690K" },
        { name: "Supermarket & Pharmacy", description: "Essential goods and medications", cost: "$1.1M" },
        { name: "Tour Operator Office", description: "Excursion booking and information", cost: "$394K" },
        { name: "Coworking Center", description: "Business facilities for digital nomads", cost: "$986K" }
      ]
    },
    {
      title: "Infrastructure & Amenities",
      icon: <Wrench size={24} className="text-teal-500" />,
      items: [
        { name: "Vehicle & Bus Parking", description: "Comprehensive parking facilities", cost: "$14.8M" },
        { name: "Walkways, Gardens & Landscaping", description: "Pedestrian-friendly green spaces", cost: "$9.9M" },
        { name: "Tourist Pier & Recreational Zone", description: "Leisure boardwalk and activities", cost: "$1.7M" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          Infrastructure & Facilities
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900">{section.title}</h3>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-blue-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-teal-600 font-medium">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;