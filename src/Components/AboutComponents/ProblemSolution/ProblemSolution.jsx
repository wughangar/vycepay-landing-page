// Problem & Solution Section
const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            The problems we're solving
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Transactional Friction
            </h3>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Remote workers and diaspora lose money to unfavorable exchange rates and high fees at every step, 
                from international transfers to local conversions.
              </p>
              <p>
                Tourists face the hassle of getting local SIM cards just to transact, creating unnecessary barriers 
                to their travel experience.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-6">
              Privacy & Security Risks
            </h3>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                Current mobile money systems use phone numbers as public financial identifiers, exposing users 
                to spam, scams, and unsolicited contact.
              </p>
              <p>
                For a generation that grew up with heightened awareness of digital privacy, 
                this fundamental security risk is a deal-breaker.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-6">
            Our Solution: Controlled Interoperability
          </h3>
          <p className="text-lg text-gray-700 font-light leading-relaxed max-w-4xl mx-auto">
            VycePay provides travelers and expats with a seamless, multi-currency wallet that's private, secure, and cost-effective. 
            By detaching financial identity from personal phone numbers and using secure usernames instead, we ensure safer, 
            more private transactions. Combined with transparent, low-cost exchange rates, this eliminates the hassle of juggling 
            multiple apps or relying on costly forex bureaus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;