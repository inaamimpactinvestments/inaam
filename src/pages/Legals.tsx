
import Navbar from '@/components/Navbar';

const Legals = () => {
  const legalSections = [
    {
      title: "Financial Services Guide",
      content: "Information about our financial services, including our authorisation, the services we provide, how we're remunerated, and our internal and external dispute resolution procedures."
    },
    {
      title: "Privacy Policy", 
      content: "Details about how we collect, use, store, and protect your personal information, including your rights regarding your data and how to contact us about privacy matters."
    },
    {
      title: "Privacy Collection Notice",
      content: "Specific information about what personal information we collect, how we collect it, and the purposes for which we collect and use it."
    },
    {
      title: "App Terms and Conditions",
      content: "The terms and conditions that govern your use of the inaam mobile application and platform, including user responsibilities and service limitations."
    },
    {
      title: "Complaints Policy",
      content: "Our process for handling complaints and disputes, including how to lodge a complaint and the steps we take to resolve issues fairly and efficiently."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-8">Legals and Disclaimers</h1>
          
          <div className="space-y-8">
            <section>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                This page contains important legal information about inaam and our services. 
                Please review these documents carefully as they contain important information about your rights and obligations.
              </p>
            </section>
            
            <div className="space-y-6">
              {legalSections.map((section, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                  <span className="text-sm text-gray-500 italic">Coming Soon - Full document will be available upon platform launch</span>
                </div>
              ))}
            </div>
            
            <section className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-yellow-800">Important Notice</h3>
              <p className="text-yellow-700 leading-relaxed">
                inaam is currently in development. The full legal documentation will be available when the platform launches. 
                If you have any questions about our legal policies or need more information, please contact us at legal@inaam.com.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Legals;
