import { motion } from 'motion/react';
import { useState } from 'react';
import { Send } from 'lucide-react';

export function FranchiseForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    investmentRange: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      
      if (!scriptUrl) {
        console.warn('Google Script URL not found. Running in demo mode.');
        // Fallback to demo mode if no URL is provided
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
          resetFormAfterDelay();
        }, 1500);
        return;
      }

      // Format data as FormData to avoid CORS preflight issues with Google Apps Script
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: data,
        mode: 'no-cors' // Google Apps Script requires no-cors mode
      });

      // With no-cors, we can't read the response, so we assume success if it didn't throw
      setIsSubmitting(false);
      setSubmitted(true);
      resetFormAfterDelay();
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again later.');
    }
  };

  const resetFormAfterDelay = () => {
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        investmentRange: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 border-4 border-[#FDB714]"
    >
      <h2 className="text-3xl font-bold text-[#013a0f] mb-6" style={{ letterSpacing: '1.5px' }}>
        FRANCHISE INQUIRY FORM
      </h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
          <p className="text-green-600">Your inquiry has been submitted. We'll contact you soon!</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-[#013a0f] mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors"
                placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-[#013a0f] mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#013a0f] mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#013a0f] mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          {/* Location Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-[#013a0f] mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors"
                placeholder="New York"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-[#013a0f] mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors"
                placeholder="NY"
              />
            </div>
          </div>

          {/* Investment Range */}
          <div>
            <label htmlFor="investmentRange" className="block text-sm font-semibold text-[#013a0f] mb-2">
              Investment Range <span className="text-red-500">*</span>
            </label>
            <select
              id="investmentRange"
              name="investmentRange"
              value={formData.investmentRange}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors"
            >
              <option value="">Select investment range</option>
              <option value="100k-250k">$100,000 - $250,000</option>
              <option value="250k-500k">$250,000 - $500,000</option>
              <option value="500k-1m">$500,000 - $1,000,000</option>
              <option value="1m+">$1,000,000+</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#013a0f] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#FDB714] focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your franchise interest..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FDB714] text-[#013a0f] font-bold py-4 rounded-lg hover:bg-[#e6a612] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#013a0f] border-t-transparent rounded-full animate-spin"></div>
                <span>SUBMITTING...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>SUBMIT INQUIRY</span>
              </>
            )}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
