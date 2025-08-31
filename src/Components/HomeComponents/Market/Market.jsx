import React from 'react';
import { TrendingUp, Users, DollarSign, ArrowRight, Globe } from 'lucide-react';

const Market = () => {
  const stats = [
    { 
      value: "$14.54B", 
      label: "Kenyan Digital Payments Market by 2028",
      icon: DollarSign,
      growth: "+340%",
      description: "Projected market size driven by mobile money adoption"
    },
    { 
      value: "$3.72B", 
      label: "Annual Diaspora Remittance Inflows",
      icon: TrendingUp,
      growth: "+15%",
      description: "Year-over-year growth in cross-border payments"
    },
    { 
      value: "2.5M", 
      label: "International Tourist Arrivals",
      icon: Users,
      growth: "+22%",
      description: "Annual visitors requiring seamless payment solutions"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-gray-900 mb-8 tracking-tight">
            The opportunity
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Three converging forces creating unprecedented opportunity in East Africa
          </p>
        </div>
        
        {/* Hero Metric */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-16 shadow-sm border border-gray-200 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-3xl mb-8">
              <DollarSign className="w-10 h-10 text-gray-700" />
            </div>
            
            <div className="text-8xl font-extralight text-gray-900 mb-4 tracking-tight">
              $14.54B
            </div>
            <div className="text-2xl text-gray-600 font-light mb-4">
              Kenyan Digital Payments Market by 2028
            </div>
            <div className="text-lg text-gray-500 font-light">
              +340% projected growth
            </div>
          </div>
        </div>

        {/* Supporting Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.slice(1).map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                  <IconComponent className="w-7 h-7 text-gray-700" />
                </div>
                
                <div className="text-4xl font-light text-gray-900 mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-700 font-light mb-3">
                  {stat.label}
                </div>
                <div className="text-gray-500 font-light leading-relaxed mb-4">
                  {stat.description}
                </div>
                <div className="text-sm text-gray-400 font-light">
                  {stat.growth} growth
                </div>
              </div>
            );
          })}
        </div>

        {/* Vision Section */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-8">
            <Globe className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-4xl font-light text-white mb-6 tracking-tight">
            Building Africa's financial future
          </h3>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
            We're not just building an app. We're creating the infrastructure 
            for a financially connected continent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all flex items-center group">
              Partner with us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white px-8 py-4 rounded-full text-lg font-light border border-white/20 hover:bg-white/10 transition-all">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;