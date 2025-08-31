// Footer Component
const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-semibold text-gray-900 mb-4">
              VycePay
            </div>
            <p className="text-gray-700 font-normal leading-relaxed max-w-md mb-6">
              Send, spend, exchange, anywhere. Building the financial infrastructure 
              for a connected Africa.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-gray-700 font-normal">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-gray-700 font-normal">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 font-normal">
          © {currentYear} VycePay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;