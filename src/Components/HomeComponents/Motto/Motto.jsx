// Custom SVG Icons
const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M7 7h10l-4-4m4 4l-4 4m4-4H3" />
  </svg>
);

const SpendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);

const ExchangeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M7 10l5-5 5 5" />
    <path d="M7 14l5 5 5-5" />
  </svg>
);

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

const Motto = () => {
  const mottoItems = [
    { 
      icon: <SendIcon />, 
      title: "Send", 
      description: "Instant transfers with usernames, not phone numbers",
      image: "/send.jpg" // replace with your actual image
    },
    { 
      icon: <SpendIcon />, 
      title: "Spend", 
      description: "Multi-currency wallet for seamless transactions",
      image: "/spend.jpg"
    },
    { 
      icon: <ExchangeIcon />, 
      title: "Exchange", 
      description: "Best rates with transparent, ultra-low fees",
      image: "/exchange.jpg"
    },
    { 
      icon: <AnywhereIcon />, 
      title: "Anywhere", 
      description: "Global reach, local trust",
      image: "/anywhere.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mottoItems.map((item, index) => (
            <div key={index} className="group">
              {/* Image Card */}
              <div className="aspect-square rounded-3xl mb-6 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.title} Illustration`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-gray-900">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motto;