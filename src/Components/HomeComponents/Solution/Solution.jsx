const AnywhereIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const SecurityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M9 12l2 2 4-4" />
    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
  </svg>
);

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
    <path d="M16 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
    <circle cx="16" cy="13" r="1" />
  </svg>
);

const Solution = () => {
  const features = [
    { icon: <SecurityIcon />, title: "Privacy First", description: "Secure usernames replace phone numbers, protecting your identity" },
    { icon: <WalletIcon />, title: "Ultra-Low Fees", description: "Transparent costs that are significantly lower than traditional systems" },
    { icon: <AnywhereIcon />, title: "Global Reach", description: "Seamless currency conversion wherever you are in the world" }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Controlled Interoperability
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            A seamless, secure, multi-currency ecosystem that puts privacy first
          </p>
        </div>

        {/* Main Solution Image */}
        <div className="aspect-[16/9] rounded-3xl mb-16 overflow-hidden">
          <img 
            src="/solution.jpg"
            alt="Solution Demo"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8">
              <div className="aspect-square bg-white rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-12 h-12 text-gray-900">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;