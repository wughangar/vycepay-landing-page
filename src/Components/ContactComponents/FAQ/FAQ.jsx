import React, { useState } from 'react';
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How secure is VycePay?",
      answer: "VycePay uses bank-grade encryption and complies with international security standards to protect your financial data and transactions."
    },
    {
      question: "What are your transaction fees?",
      answer: "We charge just 1.5% for international transfers, significantly lower than traditional services that typically charge 3% or more."
    },
    {
      question: "Which countries do you support?",
      answer: "We're launching with Kenya-USA corridors and expanding globally. Contact us to learn about upcoming markets."
    },
    {
      question: "How do I become a partner?",
      answer: "We're always looking for strategic partnerships. Email partnerships@vycepay.com with your proposal."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <div className={`w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-45' : ''} text-black`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14m-7-7h14" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;