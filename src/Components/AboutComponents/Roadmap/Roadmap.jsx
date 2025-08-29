// Roadmap Section
const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP & Core Features",
      description: "Launching with a robust multi-currency digital wallet, offering location-based currency conversion and instant, ultra-low-cost P2P transfers within the VycePay network.",
      status: "current"
    },
    {
      phase: "Phase 2",
      title: "Controlled Interoperability",
      description: "Strategic integration with key external networks like M-Pesa for merchant till and P2P interoperability. Establishing direct remittance corridors from diaspora countries.",
      status: "next"
    },
    {
      phase: "Phase 3",
      title: "Full Financial Ecosystem",
      description: "Expanding into high-margin value-added services: digital credit, bill payments, savings, and investment products for long-term profitability and sustainable growth.",
      status: "future"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Our roadmap
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Building the future of African fintech in three strategic phases
          </p>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className={`rounded-3xl p-8 ${phase.status === 'current' ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4">
                  <div className={`text-sm font-medium mb-2 ${phase.status === 'current' ? 'text-gray-300' : 'text-gray-500'}`}>
                    {phase.phase}
                  </div>
                  <h3 className={`text-2xl font-medium ${phase.status === 'current' ? 'text-white' : 'text-gray-900'}`}>
                    {phase.title}
                  </h3>
                </div>
                <div className="md:w-3/4">
                  <p className={`font-light leading-relaxed ${phase.status === 'current' ? 'text-gray-200' : 'text-gray-600'}`}>
                    {phase.description}
                  </p>
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