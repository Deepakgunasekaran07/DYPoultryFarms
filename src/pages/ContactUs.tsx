import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-neutral-800 mb-6">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-barn mx-auto mb-6"></div>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed font-body">
              For any questions relating to our products, please share your details in the form below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-barn border-2 border-neutral-200 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-wood-grain opacity-5"></div>

              <div className="relative z-10">
                {/* Contact Form */}
                <form className="space-y-6 text-left">
                  {/* Query Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        Nature of Query
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body">
                        <option value="">Select Nature of Query</option>
                        <option value="business">Business Enquiry</option>
                        <option value="support">Support</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        Business Category
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body">
                        <option value="">Select Business Category</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="retail">Retail</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="individual">Individual Customer</option>
                      </select>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        Country
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body">
                        <option value="">Select Country</option>
                        <option value="india">India</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        State
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body">
                        <option value="">Select State</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamil-nadu">Tamil Nadu</option>
                        <option value="andhra-pradesh">Andhra Pradesh</option>
                        <option value="telangana">Telangana</option>
                        <option value="kerala">Kerala</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                        City
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body">
                        <option value="">Select City</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="mysore">Mysore</option>
                        <option value="hubli">Hubli</option>
                        <option value="mangalore">Mangalore</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-heading font-medium text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-barn focus:outline-none transition-colors duration-300 font-body resize-vertical"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="bg-barn text-white px-12 py-4 rounded-lg font-heading font-bold text-lg hover:bg-barn/90 transition-all duration-300 hover:scale-105 shadow-lg border-2 border-barn hover:border-barn/90"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Image Section - Full image visible */}
      <section className="relative">
        <img
          src="https://res.cloudinary.com/dlfitvhc0/image/upload/v1752235157/WhatsApp_Image_2025-07-11_at_5.28.42_PM_nxbdi8.jpg"
          alt="Contact and Footer Background"
          className="w-full object-contain"
        />
      </section>
    </div>
  );
};

export default ContactUs;