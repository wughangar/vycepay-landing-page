
const Features = () => {
  const features = [
    {
      title: "Unwavering Security",
      description: "Bank-grade encryption with proactive compliance and transparent operations",
      image: "/security.jpg"
    },
    {
      title: "Cost Leadership", 
      description: "Ultra-low fees that significantly undercut traditional and digital competitors",
      image: "/cost.jpg"
    },
    {
      title: "Strategic Integration",
      description: "Seamless connectivity with existing systems like M-Pesa and future PAPSS",
      image: "/strategic.jpg"
    },
    {
      title: "Pan-African Vision",
      description: "Building financial infrastructure for continent-wide economic growth",
      image: "/pan-africa.jpg"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Built different
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="aspect-[16/10] rounded-3xl mb-8 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-3xl font-light text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;