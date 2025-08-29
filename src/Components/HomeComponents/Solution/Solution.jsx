// Much better, cleaner icons
const PrivacyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const LowFeesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M3 3v18h18" />
    <path d="M18.7 8 8 18.7l-2.7-2.7L13.7 7.3 18.7 8z" />
    <circle cx="9" cy="9" r="2" />
    <circle cx="20" cy="4" r="2" />
  </svg>
);

const GlobalReachIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h8" />
    <path d="M12 8a4 4 0 0 1 0 8 4 4 0 0 1 0-8z" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
  </svg>
);

// Alternative set of even cleaner icons
const AlternativePrivacyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const AlternativeLowFeesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <path d="M16 8h-1" />
    <path d="M8 16h1" />
  </svg>
);

const AlternativeGlobalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

// Even simpler, more minimalist icons
const MinimalPrivacyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M23 11l-3-3-3 3" />
  </svg>
);

const MinimalFeesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M7 18l10-10" />
    <path d="M17 8h-4V4" />
    <circle cx="7" cy="18" r="3" />
    <circle cx="17" cy="8" r="3" />
  </svg>
);

const MinimalGlobalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// Updated section with proper image support
const SolutionImageSection = ({ imageSrc, imageAlt = "VycePay Solution Demo" }) => {
  return (
    <div className="aspect-[16/9] rounded-3xl mb-16 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {imageSrc ? (
        <img 
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-gray-400">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                <circle cx="13.5" cy="13.5" r="1.5" />
                <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L9 18" />
              </svg>
            </div>
            <p className="text-gray-500 font-light">Add your solution demo image here</p>
            <p className="text-sm text-gray-400 mt-2">Recommended: 1200x675px (16:9 aspect ratio)</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Usage in your Solution component:
const Solution = () => {
  // You can set your image path here
  const solutionImageSrc = "/solution.jpg"; // Update this path to your actual image
  // Or set to null/undefined to show placeholder: const solutionImageSrc = null;
  
  const features = [
    { 
      icon: <AlternativePrivacyIcon />, 
      title: "Privacy First", 
      description: "Secure usernames replace phone numbers, protecting your identity" 
    },
    { 
      icon: <LowFeesIcon />, 
      title: "Ultra-Low Fees", 
      description: "Transparent costs that are significantly lower than traditional systems" 
    },
    { 
      icon: <MinimalGlobalIcon />, 
      title: "Global Reach", 
      description: "Seamless currency conversion wherever you are in the world" 
    }
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

        {/* Main Solution Image - Now supports actual images */}
        <SolutionImageSection 
          imageSrc={solutionImageSrc} 
          imageAlt="VycePay controlled interoperability solution demo"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-white rounded-2xl mb-6 flex items-center justify-center shadow-sm">
                <div className="text-gray-700">
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

// Alternative: Simple inline version if you prefer
const SolutionSimple = () => {
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

        {/* Simple image with fallback */}
        <div className="aspect-[16/9] rounded-3xl mb-16 overflow-hidden">
          <img 
            src="/images/solution-demo.jpg" // Update this to your actual image path
            alt="VycePay Solution Demo"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div class="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-32 h-32 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" class="w-16 h-16 text-gray-400">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        <circle cx="13.5" cy="13.5" r="1.5"></circle>
                        <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L9 18"></path>
                      </svg>
                    </div>
                    <p class="text-gray-500 font-light">Image not found</p>
                  </div>
                </div>
              `;
            }}
          />
        </div>

        {/* Rest of your component... */}
      </div>
    </section>
  );
};

export default Solution;