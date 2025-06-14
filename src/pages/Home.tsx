
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SimpleMailchimpForm from '@/components/SimpleMailchimpForm';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle page load transition
  useEffect(() => {
    // Set a small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Set up intersection observer for scroll animations after initial load
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('opacity-0');
    });
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0');
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="py-16 md:py-24 relative">
            {/* Hero content */}
            <div className={`text-centre space-y-6 max-w-3xl mx-auto relative z-10 transition-all duration-1000 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="space-y-5">
                <span className={`inline-block text-sm font-medium uppercase tracking-wide bg-black text-white px-3 py-1 rounded-full transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Coming Soon
                </span>
                <h1 className={`text-4xl md:text-5xl lg:text-6xl leading-tight transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Impact investing in your pocket.
                </h1>
                <p className={`text-gray-600 text-lg md:text-xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  From you, for impact.
                </p>
              </div>
              
              <div className={`mt-6 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} id="waitlist">
                <SimpleMailchimpForm />
              </div>
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="animate-on-scroll opacity-0 space-y-4">
                <div className="w-12 h-12 flex items-centre justify-centre rounded-full bg-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Simplified</h3>
                <p className="text-gray-600">
                  Investment made accessible for everyone, regardless of your experience level.
                </p>
              </div>
              
              <div className="animate-on-scroll opacity-0 space-y-4">
                <div className="w-12 h-12 flex items-centre justify-centre rounded-full bg-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8L21 12M21 12L17 16M21 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Impactful</h3>
                <p className="text-gray-600">
                  Make investments that align with your values and create positive change.
                </p>
              </div>
              
              <div className="animate-on-scroll opacity-0 space-y-4">
                <div className="w-12 h-12 flex items-centre justify-centre rounded-full bg-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 20H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 20V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 20V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 20V4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 20V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold">Growth</h3>
                <p className="text-gray-600">
                  Smart investment strategies designed to help your money grow over time.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="py-16 md:py-24 text-centre">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold opacity-100">
                Join our waitlist today
              </h2>
              <p className="text-gray-600 text-lg animate-on-scroll opacity-0">
                Be notified when we launch.
              </p>
              <div className="animate-on-scroll opacity-0 mt-2">
                <SimpleMailchimpForm />
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-centre">
            <div className="mb-4 md:mb-0">
              <img src="/lovable-uploads/0a23badb-d7a6-419a-89ce-8103e50caea0.png" alt="inaam" className="h-6" />
            </div>
            <div className="flex flex-col md:flex-row items-centre gap-4">
              <a href="/legals" className="text-gray-500 text-sm hover:text-gray-700 transition-colours">
                Legals and Disclaimers
              </a>
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} inaam. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
