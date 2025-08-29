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

export default Footer;