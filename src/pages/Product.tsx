import Navbar from '@/components/Navbar';
const Product = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-8">Product</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Impact Investing Made Simple</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our platform brings impact investing to your fingertips, making it accessible for everyone regardless of experience level. 
                Invest in companies and funds that align with your values while building wealth for the future.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Simplified Interface</h3>
                  <p className="text-gray-600">
                    Clean, intuitive design that makes investing straightforward and stress-free.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Impact Tracking</h3>
                  <p className="text-gray-600">
                    See the real-world impact of your investments with detailed reporting.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Curated Opportunities</h3>
                  <p className="text-gray-600">
                    Hand-picked investment opportunities that meet our strict impact criteria.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Mobile First</h3>
                  <p className="text-gray-600">
                    Manage your portfolio on the go with our mobile-optimized platform.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>;
};
export default Product;