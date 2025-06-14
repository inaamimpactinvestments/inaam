import Navbar from '@/components/Navbar';
import SimpleMailchimpForm from '@/components/SimpleMailchimpForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-center">Pricing</h1>
          
          <div className="space-y-8">
            <section className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in keeping things simple. Our pricing structure is designed to be transparent 
                and fair, so you always know what you're paying for.
              </p>
            </section>
            
            <section className="max-w-3xl mx-auto">
              <Tabs defaultValue="beta" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="beta">Beta Access</TabsTrigger>
                  <TabsTrigger value="full">Full Access</TabsTrigger>
                </TabsList>
                
                <TabsContent value="beta" className="mt-6">
                  <div className="p-8 border border-gray-200 rounded-lg text-center">
                    <h3 className="text-2xl font-semibold mb-4">Early Access</h3>
                    <p className="text-gray-600 mb-6">
                      Join our waitlist to be among the first to access inaam when we launch. 
                      Early users will receive special pricing and exclusive features.
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold font-mono">Free</span>
                      <span className="text-gray-500 ml-2">during beta</span>
                    </div>
                    <SimpleMailchimpForm />
                  </div>
                </TabsContent>
                
                <TabsContent value="full" className="mt-6">
                  <div className="p-8 border border-gray-200 rounded-lg text-center">
                    <h3 className="text-2xl font-semibold mb-4">Full Access</h3>
                    <p className="text-gray-600 mb-6">
                      Complete access to all inaam features including advanced portfolio management, 
                      detailed impact reporting, and premium investment opportunities.
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold font-mono">$10 AUD</span>
                      <span className="text-gray-500 ml-2">per month</span>
                    </div>
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        * Minimum investment of <span className="font-mono font-semibold">$10 AUD</span> required
                      </p>
                    </div>
                    <SimpleMailchimpForm />
                  </div>
                </TabsContent>
              </Tabs>
            </section>
            
            <section className="text-center">
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Platform access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Impact tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Educational resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Customer support</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
