
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At inaam, we believe that everyone should have the opportunity to invest in a way that aligns 
                with their values. Our mission is to democratize impact investing, making it accessible, 
                simple, and transparent for all.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Why inaam?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The word "inaam" means "gift" or "reward" in Arabic and Urdu. We chose this name because 
                we believe that impact investing is both a gift to our planet and communities, and a reward 
                for making conscious financial decisions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                  <p className="text-gray-600">
                    We're breaking down barriers to make impact investing available to everyone, 
                    regardless of investment experience or portfolio size.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                  <p className="text-gray-600">
                    Clear reporting and straightforward communication about both financial returns 
                    and social impact.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p className="text-gray-600">
                    Empowering users with knowledge and resources to make informed investment decisions.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Impact</h3>
                  <p className="text-gray-600">
                    Creating positive change in the world while building wealth for our users.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a world where every investment decision considers not just financial returns, 
                but also the impact on people and planet. Through technology and education, we're working 
                to make this vision a reality.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
