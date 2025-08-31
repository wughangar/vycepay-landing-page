
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Banner Image */}
      <div className="absolute inset-0">
        <img
          src="/home.jpg"
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

export default Hero;
