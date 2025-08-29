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

export default Problem;