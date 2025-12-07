import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-ezzu-navy py-16 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300">We'd love to hear from you. Reach out to our headquarters.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-ezzu-navy mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ezzu-blue focus:border-transparent outline-none bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ezzu-blue focus:border-transparent outline-none bg-white" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ezzu-blue focus:border-transparent outline-none bg-white" placeholder="Inquiry about..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ezzu-blue focus:border-transparent outline-none bg-white" placeholder="How can we help?"></textarea>
              </div>
              <button className="bg-ezzu-blue text-white px-8 py-3 rounded-lg font-bold hover:bg-ezzu-navy transition-colors w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-ezzu-navy mb-6">Headquarters</h2>
            
            <div className="flex items-start">
              <div className="bg-white border border-gray-200 p-3 rounded-full mr-4 text-ezzu-navy">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Address</h3>
                <p className="text-gray-600">Bole Medhanealem,<br/>Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white border border-gray-200 p-3 rounded-full mr-4 text-ezzu-navy">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Phone</h3>
                <p className="text-gray-600">+251 11 662 0000</p>
                <p className="text-gray-600">+251 911 22 33 44</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white border border-gray-200 p-3 rounded-full mr-4 text-ezzu-navy">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">info@ezzuautotech.com</p>
                <p className="text-gray-600">sales@ezzuautotech.com</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-ezzu-navy mb-4">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:30 PM</span>
                <span>Saturday:</span>
                <span>8:00 AM - 12:30 PM</span>
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;