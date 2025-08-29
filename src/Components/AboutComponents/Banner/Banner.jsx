// Hero Section
const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight leading-tight">
          Building the future<br />of African fintech
        </h1>
        <p className="text-xl text-gray-600 mb-16 font-light leading-relaxed max-w-3xl mx-auto">
          We're creating a new financial infrastructure built on privacy and trust. 
          A seamless way for people to send, pay, and convert currency globally—all with a simple username.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-light text-gray-900 mb-2">$14.54B</div>
            <div className="text-gray-600 font-light">Kenyan digital payments market by 2028</div>
          </div>
          <div>
            <div className="text-4xl font-light text-gray-900 mb-2">$3.7B</div>
            <div className="text-gray-600 font-light">Annual diaspora remittances to Kenya</div>
          </div>
          <div>
            <div className="text-4xl font-light text-gray-900 mb-2">2.5M</div>
            <div className="text-gray-600 font-light">International visitors annually</div>
          </div>
        </div>
      </div>
    </section>
  );
};
    
export default AboutHero;