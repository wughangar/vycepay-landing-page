import React, { useState } from 'react';

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

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100/50 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="text-2xl font-medium text-gray-900 tracking-tight">
              VycePay
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#solution" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Solution</a>
            <a href="#roadmap" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Roadmap</a>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all font-medium">
              Join Waitlist
            </button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-1'}`} />
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'translate-y-3'}`} />
              <span className={`absolute h-0.5 w-6 bg-gray-900 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-5'}`} />
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="space-y-4">
              <a href="#features" className="block py-2 text-gray-600">Features</a>
              <a href="#solution" className="block py-2 text-gray-600">Solution</a>
              <a href="#roadmap" className="block py-2 text-gray-600">Roadmap</a>
              <button className="w-full bg-gray-900 text-white py-3 rounded-full">
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Hero Section with Banner
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Banner Image */}
      <div className="absolute inset-0">
        <img
          src="/banner-3.jpg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50"></div>
      </div>


      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
          Send, spend, exchange,
          <span className="block font-medium">anywhere</span>
        </h1>
        
        <p className="text-xl text-white mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          A new financial infrastructure built on privacy and trust. 
          Currency exchange reimagined for the modern world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all">
            Join Early Access
          </button>
          <button className="text-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium 
                    hover:bg-white/80 transition-all backdrop-blur-sm border border-gray-300">
            Learn more →
          </button>

        </div>
      </div>
    </section>
  );
};

// Motto Section with Image Cards
// Motto Section with Image Cards
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
      image: "/images/anywhere.jpg"
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


// Problem Section with Split Layout
const Problem = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Financial friction shouldn't exist
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-[4/3] rounded-3xl mb-8 overflow-hidden">
              <img
                src="/problem.png" 
                alt="Problem Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Transactional Friction</h3>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Remote workers lose money to unfavorable rates. Tourists struggle 
                with local connectivity just to make payments.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">Privacy Concerns</h3>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                Phone-based systems expose users to unwanted contacts and 
                potential security vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Solution Section with Feature Cards
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
        <div className="aspect-[16/9] bg-gray-100 rounded-3xl mb-16 flex items-center justify-center">
          <span className="text-gray-500 text-lg font-light">Solution Demo Image/Video</span>
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

// Features Section with Image Cards
const Features = () => {
  const features = [
    {
      title: "Unwavering Security",
      description: "Bank-grade encryption with proactive compliance and transparent operations"
    },
    {
      title: "Cost Leadership", 
      description: "Ultra-low fees that significantly undercut traditional and digital competitors"
    },
    {
      title: "Strategic Integration",
      description: "Seamless connectivity with existing systems like M-Pesa and future PAPSS"
    },
    {
      title: "Pan-African Vision",
      description: "Building financial infrastructure for continent-wide economic growth"
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
              <div className="aspect-[16/10] bg-gray-200 rounded-3xl mb-8 overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 font-light">{feature.title} Visual</span>
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

// Roadmap Section with Timeline Images
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

// Market Section with Infographic
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

// CTA Section
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

// Footer Component
const Footer = () => {
  return (
    <footer className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-medium text-gray-900 mb-4">
              VycePay
            </div>
            <p className="text-gray-600 font-light leading-relaxed max-w-md mb-6">
              Send, spend, exchange, anywhere. Building the financial infrastructure 
              for a connected Africa.
            </p>
            
            {/* Footer Logo/Brand Image */}
            <div className="w-32 h-20 bg-gray-200 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 text-sm font-light">Logo</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-gray-600 font-light">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 font-light">
          © 2024 VycePay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Motto />
      <Problem />
      <Solution />
      <Features />
      <Roadmap />
      <Market />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;