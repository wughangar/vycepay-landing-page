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

const ContactHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Hero Banner Image */}
      <div className="absolute inset-0">
        <img
          src="/contact.jpg"
          alt="Contact Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 md:mb-8 tracking-tight leading-tight">
          Get in touch
          <span className="block font-medium">with us today</span>
        </h1>
        <p className="text-lg sm:text-xl text-white mb-12 md:mb-16 font-light leading-relaxed max-w-3xl mx-auto">
          Have questions? Want to partner with us? We'd love to hear from you.
          Let's build the <span className="font-medium">future of fintech</span> together.
        </p>
        
        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20">
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2 md:mb-4 text-white">
              <EmailIcon />
            </div>
            <div className="text-base md:text-xl font-medium text-white mb-1 md:mb-2">Email Us</div>
            <div className="text-white/80 font-light text-xs md:text-base">hello@vycepay.com</div>
            <div className="text-white/60 font-light text-xs mt-1">Drop us a line anytime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20">
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2 md:mb-4 text-white">
              <LocationIcon />
            </div>
            <div className="text-base md:text-xl font-medium text-white mb-1 md:mb-2">Visit Us</div>
            <div className="text-white/80 font-light text-xs md:text-base">Nairobi, Kenya</div>
            <div className="text-white/60 font-light text-xs mt-1">East Africa's tech hub</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/20 sm:col-span-2 md:col-span-1">
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center mx-auto mb-2 md:mb-4 text-white">
              <PartnershipIcon />
            </div>
            <div className="text-base md:text-xl font-medium text-white mb-1 md:mb-2">Partner With Us</div>
            <div className="text-white/80 font-light text-xs md:text-base">partnerships@vycepay.com</div>
            <div className="text-white/60 font-light text-xs mt-1">Let's build together</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;