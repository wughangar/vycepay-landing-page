
const Roadmap = () => {
  const phases = [
    {
      phase: "01",
      title: "Foundation",
      description: "Multi-currency wallet with location-based conversion and ultra-low-cost transfers",
      features: ["Digital Wallet", "Currency Conversion", "P2P Transfers", "User Authentication"]
    },
    {
      phase: "02",
      title: "Integration", 
      description: "Strategic partnerships with M-Pesa and direct remittance corridors",
      features: ["M-Pesa Integration", "Remittance Corridors", "Merchant Payments", "API Development"]
    },
    {
      phase: "03",
      title: "Ecosystem",
      description: "Full financial services including credit, savings, and investment products",
      features: ["Digital Credit", "Savings Products", "Investment Options", "PAPSS Integration"]
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Our journey
          </h2>
        </div>
        
        <div className="space-y-20">
          {phases.map((phase, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <div className="flex-1">
                <div className="aspect-[4/3] bg-gray-100 rounded-3xl flex items-center justify-center">
                  <span className="text-gray-500 font-light">Phase {phase.phase} Visual</span>
                </div>
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="text-6xl font-light text-gray-300">{phase.phase}</div>
                <h3 className="text-3xl font-light text-gray-900">{phase.title}</h3>
                <p className="text-xl text-gray-600 font-light leading-relaxed">{phase.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {phase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;