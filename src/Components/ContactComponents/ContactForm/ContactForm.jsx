import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl 
                             focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                             transition-all placeholder-gray-400 text-black"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl 
                             focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                             transition-all placeholder-gray-400 text-black"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-900 mb-3">
                Inquiry Type
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl 
                           focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                           transition-all text-black"
              >
                <option value="general">General Inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="support">Customer Support</option>
                <option value="press">Press & Media</option>
                <option value="careers">Careers</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-3">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl 
                           focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                           transition-all placeholder-gray-400 text-black"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-200 rounded-2xl 
                           focus:ring-2 focus:ring-gray-900 focus:border-transparent 
                           transition-all resize-none placeholder-gray-400 text-black"
                placeholder="Tell us more about your inquiry..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;