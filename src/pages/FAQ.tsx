
import Navbar from '@/components/Navbar';

const FAQ = () => {
  const faqs = [
    {
      question: "What is impact investing?",
      answer: "Impact investing is an investment approach that seeks to generate positive, measurable social and environmental impact alongside a financial return. It's about making investments that align with your values while still building wealth."
    },
    {
      question: "How is inaam different from traditional investment platforms?",
      answer: "inaam focuses specifically on impact investments, curating opportunities that meet strict social and environmental criteria. We also provide detailed impact reporting so you can see the real-world effects of your investments."
    },
    {
      question: "What types of investments are available?",
      answer: "We offer a range of impact investment opportunities including ESG funds, green bonds, social impact bonds, and direct investments in companies creating positive change. All investments are carefully vetted for both impact and financial potential."
    },
    {
      question: "What are the minimum investment amounts?",
      answer: "We're working to make impact investing accessible to everyone. Minimum investment amounts will vary by opportunity, but we're committed to keeping barriers to entry as low as possible."
    },
    {
      question: "How do you measure impact?",
      answer: "We use established impact measurement frameworks and work with third-party verification where possible. You'll receive regular reports showing both your financial returns and the specific social/environmental outcomes your investments are creating."
    },
    {
      question: "Is impact investing as profitable as traditional investing?",
      answer: "Impact investments can be competitive with traditional investments. While some may offer slightly lower returns in exchange for positive impact, many impact investments perform as well as or better than conventional alternatives."
    },
    {
      question: "When will inaam be available?",
      answer: "We're currently in development and building our waitlist. Join our waitlist to be among the first to know when we launch and to receive early access to the platform."
    },
    {
      question: "Is my money safe with inaam?",
      answer: "Security and compliance are our top priorities. We work with regulated financial institutions and follow all applicable financial regulations to ensure your investments are protected."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <a 
              href="mailto:hello@inaam.com" 
              className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
