// What We Do Section
const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            What We Do
          </h2>
          <p className="text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            Borderless Payments for the Modern Traveler
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-3xl p-12 mb-16">
          <p className="text-xl text-gray-700 font-light leading-relaxed text-center max-w-4xl mx-auto mb-8">
            We built VycePay for people on the move—digital nomads, tourists, and global citizens. Our platform lets you:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Exchange Currency Instantly</h3>
                <p className="text-gray-600 font-light">at the best rates</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Send & Receive Money Worldwide</h3>
                <p className="text-gray-600 font-light">at just 1.5% fees (vs the usual 3%)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Pay Seamlessly</h3>
                <p className="text-gray-600 font-light">with or without a local SIM card</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Stay Secure</h3>
                <p className="text-gray-600 font-light">with bank-grade encryption and compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;