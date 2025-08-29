const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
          Join thousands of early users building the future of African fintech
        </p>
        
        <div className="aspect-[16/9] bg-gray-100 rounded-3xl mb-12 flex items-center justify-center">
          <span className="text-gray-500 font-light">App Preview/Demo</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
            Join Waitlist
          </button>
          <button className="text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all border border-gray-300">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;