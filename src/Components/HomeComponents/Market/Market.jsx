const Market = () => {
  const stats = [
    { value: "$14.54B", label: "Kenyan Digital Payments Market by 2028" },
    { value: "$3.72B", label: "Annual Diaspora Remittance Inflows" },
    { value: "2.5M", label: "International Tourist Arrivals" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            The opportunity
          </h2>
        </div>
        
        {/* Market Infographic */}
        <div className="aspect-[16/10] bg-gray-200 rounded-3xl mb-16 flex items-center justify-center">
          <span className="text-gray-500 text-lg font-light">Market Opportunity Infographic</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-light">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 text-center">
          <div className="aspect-[16/9] bg-gray-100 rounded-2xl mb-8 flex items-center justify-center">
            <span className="text-gray-500 font-light">Vision Illustration</span>
          </div>
          <h3 className="text-4xl font-light text-gray-900 mb-6">Building Africa's financial future</h3>
          <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            We're not just building an app. We're creating the infrastructure 
            for a financially connected continent.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
            Partner with us
          </button>
        </div>
      </div>
    </section>
  );
};
export default Market;