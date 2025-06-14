
import Navbar from '@/components/Navbar';

const Learn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-8">Learn</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Understanding Impact Investing</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Impact investing is an investment approach that seeks to generate positive, measurable social and environmental 
                impact alongside a financial return. Learn the fundamentals and start your journey today.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6">Learning Resources</h2>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Getting Started Guide</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive introduction to impact investing, covering the basics and helping you understand 
                    how to align your investments with your values.
                  </p>
                  <span className="text-sm text-gray-500">Coming Soon</span>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Investment Strategies</h3>
                  <p className="text-gray-600 mb-4">
                    Learn about different impact investing strategies and how to build a diversified portfolio 
                    that meets your financial and impact goals.
                  </p>
                  <span className="text-sm text-gray-500">Coming Soon</span>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Measuring Impact</h3>
                  <p className="text-gray-600 mb-4">
                    Understand how to measure and evaluate the social and environmental impact of your investments.
                  </p>
                  <span className="text-sm text-gray-500">Coming Soon</span>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
                  <p className="text-gray-600 mb-4">
                    Real-world examples of successful impact investments and the lessons learnt from them.
                  </p>
                  <span className="text-sm text-gray-500">Coming Soon</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Learn;
