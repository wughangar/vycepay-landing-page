const CallToAction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
          Join us in building the future
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
          We're seeking strategic partnerships and investment to accelerate VycePay's growth 
          and fulfill our vision of a financially interconnected Africa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
            Join Early Users
          </button>
          <a href="/contact" className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-all">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;