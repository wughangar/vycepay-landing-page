// Custom SVG Icons - Improved and centered
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
    <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m2 7 10 6 10-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PartnershipIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Contact Hero Section - AboutHero Design
const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Banner Image */}
      <div className="absolute inset-0">
        <img
          src="/contact-hero.jpg"
          alt="Contact Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
          Get in touch
        </h1>
        <p className="text-xl text-white mb-16 font-light leading-relaxed max-w-3xl mx-auto">
          Have questions? Want to partner with us? We'd love to hear from you.
          Let's build the future of fintech together.
        </p>
        
        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <EmailIcon />
            </div>
            <div className="text-xl font-medium text-white mb-2">Email Us</div>
            <div className="text-white/80 font-light">hello@vycepay.com</div>
            <div className="text-white/60 font-light text-sm mt-1">Drop us a line anytime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <LocationIcon />
            </div>
            <div className="text-xl font-medium text-white mb-2">Visit Us</div>
            <div className="text-white/80 font-light">Nairobi, Kenya</div>
            <div className="text-white/60 font-light text-sm mt-1">East Africa's tech hub</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <PartnershipIcon />
            </div>
            <div className="text-xl font-medium text-white mb-2">Partner With Us</div>
            <div className="text-white/80 font-light">partnerships@vycepay.com</div>
            <div className="text-white/60 font-light text-sm mt-1">Let's build together</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;