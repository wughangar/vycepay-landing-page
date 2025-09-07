import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // Get environment variables with fallbacks - safer approach
  const serviceId = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_SERVICE_ID) || 'service_exxx4wz';
  const templateId = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_TEMPLATE_ID) || 'template_la7876b';
  const publicKey = (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_PUBLIC_KEY) || 'N8iVyY-TQeyU8EGkc';
  const recipientEmail = (typeof process !== 'undefined' && process.env?.REACT_APP_RECIPIENT_EMAIL) || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Debug environment variables
    console.log('Environment variables:', {
      serviceId,
      templateId,
      publicKey,
      recipientEmail,
      processAvailable: typeof process !== 'undefined'
    });

    try {
      // Using environment variables for EmailJS credentials
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: recipientEmail,
          time: new Date().toLocaleString(),
message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 CONTACT FORM SUBMISSION

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 Contact Information:
   • Name: ${formData.name}
   • Email: ${formData.email}

 Inquiry Details:
   • Type: ${formData.inquiryType.charAt(0).toUpperCase() + formData.inquiryType.slice(1)}
   • Subject: ${formData.subject}

 Message:
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: ${new Date().toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          `.trim(),
          from_name: formData.name,
          from_email: formData.email,
          subject: `[${formData.inquiryType.toUpperCase()}] ${formData.subject}`,
        },
        publicKey
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiryType: 'general'
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-2xl">
              <p className="text-green-800 font-medium">
                ✅ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-2xl">
              <p className="text-red-800 font-medium">
                ❌ Failed to send message. Please try again.
              </p>
            </div>
          )}

          <div className="space-y-8">
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-full text-lg font-medium transition-all ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;