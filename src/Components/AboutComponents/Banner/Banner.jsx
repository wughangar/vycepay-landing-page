// About Hero Section with Banner
const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Banner Image */}
      <div className="absolute inset-0">
        
        <img
          src="/about-banner.jpg"
          alt="About Hero Banner"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight">
          Building the future<br />
          <span className="font-medium">of African fintech</span>
        </h1>
        <p className="text-xl text-white mb-16 font-light leading-relaxed max-w-3xl mx-auto">
          We're creating a new financial infrastructure built on privacy and trust. 
          A seamless way for people to send, pay, and convert currency globally—all with a simple username.
        </p>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-light text-white mb-2">$14.54B</div>
            <div className="text-white/80 font-light">Kenyan digital payments market by 2028</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-light text-white mb-2">$3.7B</div>
            <div className="text-white/80 font-light">Annual diaspora remittances to Kenya</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-light text-white mb-2">2.5M</div>
            <div className="text-white/80 font-light">International visitors annually</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;