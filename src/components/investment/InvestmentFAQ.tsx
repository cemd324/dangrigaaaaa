import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const InvestmentFAQ = () => {
  const faqs = [
    {
      question: "Minimum Investment?",
      answer: "Varies by partnership model. Contact us for details."
    },
    {
      question: "Timeline to Returns?",
      answer: "Operations commence Year 3, with returns beginning after construction phase."
    },
    {
      question: "Foreign Investment?",
      answer: "Yes, we welcome international investors with full legal protections."
    },
    {
      question: "Exit Strategies?",
      answer: "Multiple options including buyback provisions and secondary market sales."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Investment FAQ
          </h2>
          <p className="text-xl text-gray-600">
            Common Questions About Investing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <HelpCircle size={20} className="text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 text-white p-8 rounded-lg max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Invest in Belize's Future?</h3>
          <p className="text-lg text-blue-100 mb-8">
            Join us in creating the Caribbean's next premier cruise destination.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-900 font-medium rounded-md transition duration-300"
            >
              Contact Investment Team
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/infrastructure-appendix" 
            className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md transition duration-300"
          >
            View Infrastructure Components
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentFAQ;