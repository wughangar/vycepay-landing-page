

// Why Choose VycePay Section
const WhyChoose = () => {
  const benefits = [
    {
      title: "Save More",
      description: "Cut transaction fees in half",
      image: "/save-more.jpg"
    },
    {
      title: "Travel Lighter", 
      description: "No need to carry cash or juggle accounts",
      image: "/travel-light.jpg"
    },
    {
      title: "Fast & Reliable",
      description: "Instant transfers, no delays",
      image: "/fast-reliable.jpg"
    },
    {
      title: "Made for Africa & Beyond",
      description: "Start in Kenya–USA corridors, expanding globally",
      image: "/africa-beyond.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Why Choose VycePay?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/10] rounded-2xl mb-6 overflow-hidden bg-gray-100">
                <div className="w-full h-full flex items-center justify-center text-gray-500 font-light">
                  {benefit.title} Visual
                </div>
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChoose;