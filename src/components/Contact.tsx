import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-2xl mb-8 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
            GET IN TOUCH
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Let's Connect</h3>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, label: "Email", value: "founder@voilacode.com", color: "text-purple-600 dark:text-purple-400" },
                  { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+91 70323 09797", color: "text-pink-600 dark:text-pink-400" },
                  { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Madhapur, Hyderabad", color: "text-cyan-600 dark:text-cyan-400" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
                      <p className="text-gray-900 dark:text-white font-semibold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Start?</h4>
              <p className="mb-6 opacity-90">
                We're here to help you bring your vision to life. Get in touch today and let's discuss how we can make your project extraordinary.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold">Free consultation available</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send Message</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;